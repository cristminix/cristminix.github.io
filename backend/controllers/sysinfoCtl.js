const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);
const si = require('systeminformation');
const os = require("os")

async function getCpuInfo(req, res, next) {
    const cpus = os.cpus();
    const core = cpus.length;
    const model = cpus[0].model;
    const speed = cpus[0].speed;
    let load =  await execPromise(`grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage "%"}'`);
    load = load.stdout.trim();
    const cpuInfo = {model,speed,core,load};
    res.status(200).json(cpuInfo);
}
async function getDiskInfo(req, res, next) {
    try {
        const result = await execPromise(`df ~`)
        const lines = result.stdout.split("\n");
        const keys = lines[0].split(/\s+/ig);
        // Skip the header row when assigning objects..
        const rows = lines.slice(1).map(line => {
            // Parse each line..
            const values = line.split(/\s+/ig);
            return keys.reduce((o, k, index) => {
                o[k] = values[index];
                return o;
            }, {})
        });
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
async function getMemInfo(req, res, next) {
    try {
        const result = await execPromise(`cat /proc/meminfo`)
        const lines = result.stdout.split("\n");
        const keys = lines[0].split(/\s+/ig);
        // Skip the header row when assigning objects..
        const rows = {};
        lines.map(line => {
            const [key,val] = line.replace(/\s+/g,' ').replace(/\:/,'').replace(/ kB$/,'').split(' ');
            // const obj= {};
            if(key){
                rows[key] = parseInt(val);
            }
        });
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
// Allocating os module

function getServerUptime(req,res, next){
    // Printing os.uptime() value
    var ut_sec = os.uptime();
    var ut_min = ut_sec/60;
    var ut_hour = ut_min/60;
       
    ut_sec = Math.floor(ut_sec);
    ut_min = Math.floor(ut_min);
    ut_hour = Math.floor(ut_hour);
      
    ut_hour = ut_hour%60;
    ut_min = ut_min%60;
    ut_sec = ut_sec%60;
   
    const row = {ut_hour,ut_min,ut_sec}; 
    res.status(200).json(row);

}  

const getBasicInfo = async(req, res, next)=>{
    let basicInfo = {};
    const available_types = "os,mb,cpu,mem,disk,gpu,net,ping,proc,uptime".split(",");
    let t = req.query.t || 'none';

    
    
    if(available_types.includes(t)){
        if(t=="os")
            t = "osInfo"
        if(t=="cpu"){
            return getCpuInfo(req,res, next);
        }
        if(t=="mb")
            t="system"
        if(t=="disk"){
            t="fsSize"
            return getDiskInfo(req,res, next)
        }
        if(t=="uptime"){
            return getServerUptime(req,res, next)
        }
        if(t=="mem"){
            return getMemInfo(req,res, next)
        }
        if(t=="gpu")
            t="graphics"
        if(t=="net")
            t="networkConnections"
        if(t=="ping")
            t="inetLatency"
        if(t=="proc")
            t="processes"
        try{
            basicInfo.data = await si[t]();
        }
        catch(e){
            basicInfo.data = e.message;
        }
    }else{
        basicInfo.available = available_types;
    }
    // basicInfo.cpu = await si.cpu();
    // basicInfo.os = await si.osInfo();
    res.status(200).send(basicInfo);
}
const getServiceInfo = async(req, res, next)=>{
    let serviceInfo = {};
    const available_types = "dropbear,nginx".split(",");
    let t = req.query.t || 'none';
    if(available_types.includes(t)){
        if(t=="dropbear"){
            const psCommand = "ps aux|grep dropbear";
            let shellBuffers = `
root        4085  0.0  0.0   4568  1996 ?        Ss   02:20   0:00 /usr/sbin/dropbear -p 22 -W 65536
root      133114  0.0  0.0   4648  2736 ?        Ss   09:23   0:00 /usr/sbin/dropbear -p 22 -W 65536
root      136518  0.0  0.0   3312   720 pts/1    S+   09:33   0:00 grep --color=auto dropbear
            `
            shellBuffers=shellBuffers.split("\n").filter(line=>{return line.trim().length>0})
            shellBuffers = shellBuffers.map(b=>{const input=b.replace(/\s+/g," ").split(" "); return {user:input[0],bin:input[10],pid:input[1],port:input[12]} })

            res.status(200).send(shellBuffers);
        }
    }
    res.status(200).send(serviceInfo);

}
const serviceUtil = async(req, res, next)=>{

}
module.exports = {
    getBasicInfo,
    getServiceInfo,
    serviceUtil
}