const { exec } = require('child_process')
const util = require('util');
const fs = require("fs");
const path = require("path");
const serverInfo = {

    getPublicIp : async () => {
        const execPublicIp = util.promisify(exec);
        return execPublicIp("curl ip-adresim.app").then((obj)=>{
            return obj.stdout.toString().trim();
        })
    },

    getBorePort : () => {
        const logFile = path.resolve(__dirname, "../logs/bore.log");
        if(fs.existsSync(logFile)){
            const content = fs.readFileSync(logFile).toString();
            let matches = content.match(/listening\ at\ bore.pub\:(\d+)/g);
            if(matches.length > 0){
                const listenInfo = matches[0];
                matches = listenInfo.match(/(\d+)/);
                if(matches.length > 0){
                    const borePort = matches[0];
                    return borePort;
                }	
            }
        }
        return null;
    },
    getNgrokUrl : () => {
        const logFile = path.resolve(__dirname, "../logs/ngrok.log");
        if(fs.existsSync(logFile)){
            fs.readFile(logFile, (err, data) => {
            if (!err && data) {
                let content = data.toString().split(" ").join("\n");
                let regex = /(http[s]?:\/\/.*\.ngrok\.io)/g
                let matches = content.match(regex)

                if(matches.length > 0){
                    const ngrokUrl = matches[0];
                    return ngrokUrl;	
                }
            }
            })
        }
        return null;
    }
}

module.exports = serverInfo;