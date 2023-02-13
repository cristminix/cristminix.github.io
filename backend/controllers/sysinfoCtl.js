const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);
const si = require('systeminformation');

async function get_linux_disk(req, res, next) {
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
const getBasicInfo = async(req, res, next)=>{
    let basicInfo = {};
    const available_types = "os,mb,cpu,mem,disk,gpu,net,ping,proc".split(",");
    let t = req.query.t || 'none';

    
    
    if(available_types.includes(t)){
        if(t=="os")
            t = "osInfo"
        if(t=="mb")
            t="system"
        if(t=="disk"){
            t="fsSize"
            return get_linux_disk(req,res, next)
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