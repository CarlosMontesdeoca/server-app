const express = require('express');
const router = express.Router();
const sms = require('../sms/sms');

const SMS = require('../models/sms.model');

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    
    const { from, to, body } = req.body;
    const dataSMS = new SMS({from, to, body })
    sms.sendSMS()
    await dataSMS.save();

    res.json({status: 'mensaje guardado'});

});


module.exports = router;