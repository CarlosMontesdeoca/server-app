const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
// const client = require('twilio')(AC3e23caf51ccdca9d5e467f11eae0d60b,f9e407f70b92851df7ee27a8f139cafb);

const { mongoose } = require('./database');

const app = express();

app.use(cors());

//settings
app.set( 'port', process.env.PORT || 3000 );

//middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/config', require('./routes/config.routes'));
app.use('/api/contacts', require('./routes/contact.routes'));
app.use('/api/sms', require('./routes/sms.routes'));

// static files
app.use(express.static(path.join(__dirname + '/public')));

// starting the server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

// sms
