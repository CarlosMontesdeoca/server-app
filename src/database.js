const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin123@cluster0.y3s4w.mongodb.net/test';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;