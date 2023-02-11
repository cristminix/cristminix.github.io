const TunnelConf = require("../models/TunnelConf");
const tunnelConfig = require("../tunnel.conf.json")

const getServiceMaps = (req, res, next)=>{
    res.status(200).send(tunnelConfig.service_maps);
}

const getTunnelConfig = async (req, res, next)=>{
    const data = await TunnelConf.getConfig();
    res.send(data);
}
const getServiceMap = async (req, res, next)=>{
    const data = await TunnelConf.getServiceMap();
    res.send(data);
}
const getServiceToken = async (req, res, next)=>{
    const data = await TunnelConf.getServiceToken();
    res.send(data);
}
const getPredefineConfig = async (req, res, next)=>{
    const data = await TunnelConf.getPredefineConfig();
    res.send(data);
}
module.exports = {
    getServiceMaps,
    getTunnelConfig,
    getServiceMap,
    getServiceToken,
    getPredefineConfig
}