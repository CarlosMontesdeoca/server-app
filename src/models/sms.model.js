const mongoose = require('mongoose');
const { Schema } = mongoose;

const SMSSchema = new Schema({
    body: { type: String },
    from: { type: String },
    to: { type: String },
})

module.exports = mongoose.model('sms', SMSSchema);