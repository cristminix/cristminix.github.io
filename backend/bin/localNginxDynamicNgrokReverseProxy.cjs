const TunnelConf = require("../models/TunnelConf");
let lastNgrokUrl = "";
const path = require("path");
const fs = require("fs");
const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);

const nginxConfPath = path.resolve("C:/nginx/conf/ngrok-reverse-proxy.conf");
const restartSh = path.resolve(__dirname,"restart-nginx.cmd");

console.log(nginxConfPath);
async function restartNginx(){
	var spawn = require('child_process').spawn;
	spawn('node', ['bgService.js'], {
	    stdio: 'ignore', // piping all stdio to /dev/null
	    detached: true
	}).unref();
}
async function main(){

	setInterval(()=>{
		console.log("Checking TunnelConf");
		TunnelConf.getConfig().then(async (config)=>{
			console.log(config.ngrok_url)
			const ngrok_url = config.ngrok_url || "";

			if(lastNgrokUrl !== ngrok_url){
				console.log("modify nginx.conf");
				lastNgrokUrl = ngrok_url;
				const nging_conf_content = `
server {
    server_name  pbseven.dev;
listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate      C:/nginx/ssl/star_pbseven+4.pem;
    ssl_certificate_key  C:/nginx/ssl/star_pbseven+4-key.pem;

    
    ssl_ecdh_curve prime256v1;

    ssl_session_cache  builtin:1000  shared:SSL:10m;
    ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE+aECDSA+CHACHA20:ECDHE+aRSA+CHACHA20:ECDHE+aECDSA+AESGCM:ECDHE+aRSA+AESGCM:ECDHE+aECDSA+AES256+SHA384:ECDHE+aRSA+AES256+SHA384:ECDHE+aECDSA+AES256+SHA:ECDHE+aRSA+AES256+SHA';


    location / {
	    proxy_set_header        Host $host;
          proxy_set_header        X-Real-IP $remote_addr;
          proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header        X-Forwarded-Proto $scheme;

          # Fix the “It appears that your reverse proxy set up is broken" error.

          proxy_pass ${ngrok_url};

          proxy_read_timeout  60;
          proxy_ssl_name $host;
          proxy_ssl_server_name on;
          proxy_ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
          proxy_ssl_session_reuse off;
    }
}
				`;
				fs.writeFileSync(nginxConfPath,nging_conf_content);
				// console.log(nging_conf_content)
				console.log('restart nginx')
				// execPromise(`taskkill /f /im nginx.exe`).then((a,b,c)=>{console.log(a,b,c)})
				execPromise(`${restartSh}`).then((a,b,c)=>{console.log(a,b,c)})
			}

		});
	},5000);

}

main();
	// process.exit();
