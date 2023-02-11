const express = require('express');
const {getServiceMaps,
    getTunnelConfig,
    getServiceMap,
    getServiceToken,
    getPredefineConfig} = require("../controllers/serverConfigController")
const router = express.Router();

router.get('/serviceMaps', getServiceMaps);
router.get('/getTunnelConfig', getTunnelConfig);
router.get('/getServiceMap',getServiceMap);
router.get('/getServiceToken',getServiceToken);
router.get('/getPredefineConfig',getPredefineConfig);
module.exports = {
    routes: router
}