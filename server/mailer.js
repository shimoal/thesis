const nodemailer = require('nodemailer');



var mailer = function(emails, roomNum) {
  console.log('inside mailer')
  var receivers = emails.join(', ');

  var hmtl = '<h1>Hello from hackeroo!</h1>
      <p> You are receiving this message because you are about to connect with another hacker. <br>
      Your room number is: <b>' + roomNum + '</b>. <br>
      Please visit https://hackeroos.herokuapp.com/collaborate and enter this roomNum to enter and immediately be connected. <br>
      <br>
      <br>
      Happy Hacking!
      <br>
      -The team at Hackeroo
      </p>'

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
      to: receivers, // list of receivers
      subject: 'hello from node', // Subject line
      text: 'Hello world', // plain text body
      html: html // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

module.exports = mailer;