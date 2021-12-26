const express = require('express');
const router = express.Router();

const Config = require('../models/config.model');

//metodo qe obtiene los datos a traves de http
router.get('/', async (req, res) => {
    
    const dataConfig = await Config.find();
    console.log(dataConfig);
    res.json(dataConfig);

});

// metodo que envia datos a traves de http
router.post('/', async (req,res) => {
    
    const { name, message } = req.body;
    const dataConfig = new Config({ name, message })

    await dataConfig.save();

    res.json({status: 'configuracion guardada'});

});

// metodo para editar al cliente
router.put('/:id', async (req, res) => {

    const { name, message} = req.body;
    const newConfig  = { name, message };
    //obtengo el id del cliente al que estoy buscando 
    console.log(req.params.id); 

    await Config.findByIdAndUpdate(req.params.id, newConfig);

    res.json({ status: 'configuracion actualizada '});

})


module.exports = router;