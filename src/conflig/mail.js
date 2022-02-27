const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "0a6bca5b081307", // generated ethereal user
    pass: "e1a5eb1d01cc12", // generated ethereal password
  },
});
