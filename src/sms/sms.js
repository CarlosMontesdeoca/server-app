const twilio = require('twilio');

const acountSid = 'AC7f28eb9a0cfd450bf973e49503f593a4';
const auth = '75219f03381df0740f72c1198c5b48a9';

const client = new twilio(acountSid, auth);

const createSMS = () => {
    client.messages.create({
        body: 'mensaje de prueba',
        to: '+5930978885465',
        form: '+19377613379'
    }).then((message) => console.log('mensaje enviado'))
}

exports.sendSMS = () => createSMS();