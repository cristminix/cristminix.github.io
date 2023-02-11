const TunnelConf = require("../models/TunnelConf");

async function main(){
    const config = await TunnelConf.getServiceMap();
    if(typeof config.backend != 'undefined'){
        console.log(`start-${config.backend}-server.sh`);
    }
    process.exit(0);

}
main();