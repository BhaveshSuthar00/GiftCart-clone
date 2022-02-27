const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "679c5a4c5b2e62",
    pass: "873ffb178fe81c"
  },
});
