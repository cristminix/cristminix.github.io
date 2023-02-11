'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const studentRoutes = require('./routes/student-routes');
const serverConfigRoutes = require('./routes/server-config-routes');

const { Server } = require("socket.io");
const { createServer } = require("http");
const fs = require("fs");
const path = require("path");
const app = express();
const TunnelConf = require("./models/TunnelConf");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const si = require('systeminformation');

async function cpuData() {
    try {
        const data = await si.cpu();
        const info = ('- manufacturer: ' + data.manufacturer)
        +('- brand: ' + data.brand)
        +('- speed: ' + data.speed)
        +('- cores: ' + data.cores)
        +('- physical cores: ' + data.physicalCores)
        +('...');

        return info;
    } catch (e) {
        console.log(e)
    }
}
app.use('/api', studentRoutes.routes);
app.use('/api', serverConfigRoutes.routes);
app.get('/', async(req, res) => {
    res.send(await cpuData());
});
const httpServer = createServer(app);

const io = new Server(httpServer, {
cors: {
    origin: "*"
},
});
const {configStore} = require("./libs/configStore");
const serverInfo = require("./libs/serverInfo");

async function checkBorePort(){
    console.log("checking bore port")
    const server_ip = await serverInfo.getPublicIp();
    const bore_port = serverInfo.getBorePort();
    return await TunnelConf.updateConfig({bore_port, server_ip});

}
async function checkNgrokUrl(){
    console.log("checking ngrokUrl");
    const server_ip = await serverInfo.getPublicIp();
    const ngrok_port = config.port;
    const ngrok_url = await serverInfo.getNgrokUrl();
    await TunnelConf.updateConfig({ngrok_url,server_ip,ngrok_port});
    console.log(ngrok_url)
    return ngrok_url;

}
async function checkLocaltonetHost(){
    console.log("checking localtonetHost")
    const server_ip = await serverInfo.getPublicIp();
    const localtonet_port = config.port;

    await TunnelConf.updateConfig({server_ip,localtonet_port});
    const _config = await TunnelConf.getConfig();
    return _config.localtonet_host;

}

async function checkServiceMap(){
    const serviceMap = await TunnelConf.getServiceMap();
    const map = serviceMap.backend;
    let ret = {map};
    switch(map){
        case 'ngrok':
            ret.data = await checkNgrokUrl();
            break;
        case 'localtonet':
            ret.data = await checkLocaltonetHost();
            break;
        case 'bore':
            ret.data = await checkBorePort();
            break;
    }
    console.log(ret);
    return ret;
}
io.on("connection", async(s) => {
    console.log("We are live and connected");

    const configServer = await checkServiceMap();
    io.emit("configServer", configServer);
    // console.log(configServer);
});

async function main(){
    // await configStore.init();
    await checkServiceMap();

    httpServer.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
    // process.exit(0);
}

main();