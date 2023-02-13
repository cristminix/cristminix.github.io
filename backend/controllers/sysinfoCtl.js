// async function cpuData() {
//     try {
//         const data = await si.cpu();
//         const info = ('- manufacturer: ' + data.manufacturer)
//         +('- brand: ' + data.brand)
//         +('- speed: ' + data.speed)
//         +('- cores: ' + data.cores)
//         +('- physical cores: ' + data.physicalCores)
//         +('...');

//         return info;
//     } catch (e) {
//         console.log(e)
//     }
// }
const si = require('systeminformation');

const getBasicInfo = async(req, res, next)=>{
    let basicInfo = {};
    const available_types = "os,mb,cpu,mem,disk,gpu,net,ping,proc".split(",");
    let t = req.query.t || 'none';

    
    
    if(available_types.includes(t)){
        if(t=="os")
            t = "osInfo"
        if(t=="mb")
            t="system"
        if(t=="disk")
            t="fsSize"
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