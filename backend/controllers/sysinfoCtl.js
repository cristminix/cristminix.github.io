const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);
const si = require('systeminformation');

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
// Allocating os module
const os = require('os');

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
    res.status(200).json(rows);

}  

const getBasicInfo = async(req, res, next)=>{
    let basicInfo = {};
    const available_types = "os,mb,cpu,mem,disk,gpu,net,ping,proc,uptime".split(",");
    let t = req.query.t || 'none';

    
    
    if(available_types.includes(t)){
        if(t=="os")
            t = "osInfo"
        if(t=="mb")
            t="system"
        if(t=="disk"){
            t="fsSize"
            return getDiskInfo(req,res, next)
        }
        if(t=="uptime"){
            return getServerUptime(req,res, next)
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

module.exports = {
    getBasicInfo
}