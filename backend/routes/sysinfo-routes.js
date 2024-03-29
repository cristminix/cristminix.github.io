const express = require('express');
const {getBasicInfo,getServiceInfo} = require('../controllers/sysinfoCtl');

const router = express.Router();

router.get('/sysinfo/getBasicInfo', getBasicInfo);
router.get('/sysinfo/getServiceInfo', getServiceInfo);


module.exports = {
    routes: router
}