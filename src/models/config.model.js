const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConfigSchema = new Schema({
    _id: { type: String, require: true },
    name: { type: String, required: true },
    phone: { type: String, require:  true },
    message: { type: String, required: true }
})

// clientes es el nombre de la coleccion donde se guardaran los datos
module.exports = mongoose.model('configuracion', ConfigSchema);
