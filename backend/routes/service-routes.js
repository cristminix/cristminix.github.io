const express = require('express');
// const {getBasicInfo} = require('../controllers/sysinfoCtl');
const serverInfo = require("../libs/serverInfo")
const {supabaseDb} = require("../libs/supabase");
const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);
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
/**
 * queryService
 * @param {string} t - The title of the book.
 * @param {string} filter - The author of the book.
 * @example /api/queryService?t=ssh&filter=true
 * @returns {counts:1,data:{user:"",argv:[],cmdline:""}}
 */
router.get('/queryService', async(req,res,next)=>{
    const t = req.query.t || "";
    const filter = req.query.filter || false;
    try {
        const result = await execPromise(`ps aux | grep ${t}`)
        let lines = result.stdout.split("\n");

        const regexFilter = new RegExp(`grep ${t}`);
        lines = lines.filter(line=>{
            if(line){
                if(line.match(regexFilter)){
                    return false;
                }
                return true;
            }
            return false;
        });
        lines = lines.map(l=>{
            l = l.split(/\s+/g);
            const pi = {
                user: l[0],
                pid : parseInt(l[1]),
                argv : l.filter((r,i)=>{
                    if(i>=10){
                        return r
                    }
                })
            }

            pi.cmdline = pi.argv.join(" ")
            return pi;
        })
        if(filter){
            lines = lines.filter(pi=>{
                return pi.argv[0] == t;
            })
        }
        const data = {
            counts : lines.length,
            items : lines
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = {
    routes: router
}