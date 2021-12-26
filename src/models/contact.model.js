const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
})

// clientes es el nombre de la coleccion donde se guardaran los datos
module.exports = mongoose.model('contactos', ContactSchema);
