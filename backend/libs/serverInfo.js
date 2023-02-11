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
    }
}

module.exports = serverInfo;