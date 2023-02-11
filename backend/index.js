'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const studentRoutes = require('./routes/student-routes');

const { Server } = require("socket.io");
const { createServer } = require("http");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', studentRoutes.routes);


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
    return await configStore.updateData({bore_port, server_ip});

}

io.on("connection", async(s) => {
    console.log("We are live and connected");
    

    s.on('notice', function (from, msg) {
        console.log('MSG', from, ' saying ', msg);
    });

    const configServer = await checkBorePort();
    io.emit("configServer", configServer);
    console.log(configServer);
});

async function main(){
    console.log( await serverInfo.getPublicIp())
    await configStore.init();
    httpServer.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
    // process.exit(0);
}

main();