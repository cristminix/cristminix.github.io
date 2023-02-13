const express = require('express');
const {getBasicInfo} = require('../controllers/sysinfoCtl');

const router = express.Router();

router.get('/sysinfo/getBasicInfo', getBasicInfo);


module.exports = {
    routes: router
}