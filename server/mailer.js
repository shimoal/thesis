const nodemailer = require('nodemailer');

var mailer = function(emails) {
  console.log('inside mailer')
  var receivers = emails.join(', ');

  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'hackerooxyz@gmail.com',
      pass: 'j90q34njbdaf'
    }
  });

  // setup email data with unicode symbols
  var mailOptions = {
      from: '"Hackeroo team" <hackerooxyz@gmail.com>', // sender address
      to: 'alisonmichellereed@gmail.com, alisonmichellereed@gmail.com', // list of receivers
      subject: 'hello from node', // Subject line
      text: 'Hello world', // plain text body
      html: '<b>This is inside html</b>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

module.exports = mailer;