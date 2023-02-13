const TunnelConf = require("../models/TunnelConf");
let lastNgrokUrl = "";
const path = require("path");
const fs = require("fs");
const nginxConfPath = path.resolve("C:/nginx/conf/ngrok-reverse-proxy.conf");

console.log(nginxConfPath);

async function main(){

	setInterval(()=>{
		console.log("Checking TunnelConf");
		TunnelConf.getConfig().then(config=>{
			console.log(config)
			const ngrok_url = config.ngrok_url || "";

			if(lastNgrokUrl !== ngrok_url){
				console.log("modify nginx.conf");
				// lastNgrokUrl = ngrok_url;
				const nging_conf_content = `
server {
    listen 8088;
    location / {
        proxy_pass ${ngrok_url};
    }
}
				`;
				fs.writeFileSync(nginxConfPath,nging_conf_content);
				console.log(nging_conf_content)
			}

		});
	},5000);

}

main();
	// process.exit();
