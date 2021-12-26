const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

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

// static files
app.use(express.static(path.join(__dirname + '/public')));

// starting the server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

// token 
