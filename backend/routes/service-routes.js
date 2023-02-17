const express = require('express');
// const {getBasicInfo} = require('../controllers/sysinfoCtl');
const serverInfo = require("../libs/serverInfo")
const {supabaseDb} = require("../libs/supabase");

const router = express.Router();

router.get('/service', async(req,res,next)=>{
    const t = req.query.t || "";
    const available_types = "ssh,nginx,api,webshell".split(",")
    if(available_types.includes(t)){
		
        
        if(t=="ssh"){
            const port = serverInfo.getBorePort();
            const host = "bore.pub";
            res.status(200).json({host,port});

        }
        else if(t=="api"){
            const api_url = serverInfo.getNgrokUrl();
            const server_ip = await serverInfo.getPublicIp();
            res.status(200).json({api_url,server_ip});

        }
        else if(t=="webshell"){
            const tunnelConfig = await supabaseDb.getTunnelConfig();
            const url = `https://${tunnelConfig.config.localtonet_host}`;
            res.status(200).json({url});

        }
    }else{
        res.status(200).json({available_types});
    }
});

router.get('/queryService', async(req,res,next)=>{
    const t = req.query.t || "";
    const available_types = "ssh,nginx,api,webshell".split(",")
    if(available_types.includes(t)){
		
        
        if(t=="ssh"){
            // const port = serverInfo.getBorePort();
            // const host = "bore.pub";
            // res.status(200).json({host,port});

        }
        else if(t=="api"){
            // const api_url = serverInfo.getNgrokUrl();
            // const server_ip = await serverInfo.getPublicIp();
            // res.status(200).json({api_url,server_ip});

        }
        else if(t=="webshell"){
            // const tunnelConfig = await supabaseDb.getTunnelConfig();
            // const url = `https://${tunnelConfig.config.localtonet_host}`;
            // res.status(200).json({url});

        }
    }else{
        res.status(200).json({available_types});
    }
});


module.exports = {
    routes: router
}