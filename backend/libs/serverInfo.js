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
        const logFile = "/tmp/bore.log";
        //; path.resolve(__dirname, "../logs/bore.log");
        try{
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
        }catch(e){}
        return null;
    },
    getNgrokUrl : () => {
        const logFile = "/tmp/ngrok.log";
        // const logFile = path.resolve(__dirname, "../logs/ngrok.log");
        try{
            if(fs.existsSync(logFile)){
                const data = fs.readFileSync(logFile);
                let content = data.toString().split(" ").join("\n");
                let regex = /(http[s]?:\/\/.*\.ngrok\.io)/g
                let matches = content.match(regex)

                if(matches.length > 0){
                    const ngrokUrl = matches[0];
                    return ngrokUrl;	
                }
            }
        }catch(e){}
        return null;
    }
}

module.exports = serverInfo;