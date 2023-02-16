const express = require('express');
const router = express.Router();
const {supabaseDb} = require("../libs/supabase");
const R = require('request');
let serverEndPoint_cache = "";
function getServerEndpoint(tunnelCfg){
    let url = "";
    try{
        if(tunnelCfg.service_map.backend == "bore"){
            url = `http://bore.pub:${tunnelCfg.config.bore_port}`;
        }
        else if(tunnelCfg.service_map.backend == "ngrok"){
            url = `${tunnelCfg.config.ngrok_url}`;
        }
        else if(tunnelCfg.service_map.backend == "localtonet"){
            url = `https://${tunnelCfg.config.localtonet_host}`;
        }
    }catch(e){
    	console.log(e)
    }
    return url;
}
async function proxyCtl(req,res,next){
	const nocahe = req.query._nocache || false;
	if(nocahe || serverEndPoint_cache == ""){
		const tunnelConfig = await supabaseDb.getTunnelConfig();
		serverEndPoint_cache = getServerEndpoint(tunnelConfig);
	}
	const serverEndPoint = serverEndPoint_cache;
	const path = req.originalUrl.replace(/^\/proxy\//,'');
	
	const realPath = `${serverEndPoint}/${path}`;
	console.log(`proxyng:${realPath}`)
	// res.status(200).json({realPath});
    return R(realPath).pipe(res);


}

router.get(/^\/proxy\/(.*)/,proxyCtl);
module.exports = {
    routes: router
}