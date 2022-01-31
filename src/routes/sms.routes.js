const express = require('express');
const router = express.Router();
const sms = require('../sms/sms');
const twilio = require('twilio');

const authsid  = 'AC7f28eb9a0cfd450bf973e49503f593a4';
const authtok = '3107f7327aae8f07bf0c895a3ccec7b6';

const SMS = require('../models/sms.model');

const client = new twilio(authsid,authtok);

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    
    const { from, to, body } = req.body;
    client.messages.create({ body, to, from}).then((message) => console.log(message.sid))

    res.json({status: 'mensaje enviado'});

});


module.exports = router;
