const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: 'jaideep.choudary.3@gmail.com',
  from: 'deepbot777@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
const accountSid = 'AC9fb8fbb01550047f7f97f829ae317e17';
const authToken = '81f21eb45cc8a47a32d010afdb2596dd';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14157422860',
     to: '+919650252263'
   })
  .then(message => console.log(message.sid));
