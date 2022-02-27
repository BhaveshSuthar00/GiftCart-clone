const transporter = require("./conflig/mail");
const sendmail = async ({
  from,
  to,
  subject,
  text,
  html,
  attachments,
  alternatives,
}) => {
  await transporter.sendMail({
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html,
    attachments, // html body
    alternatives,
  });
};

const verificationMail = async ({ from, to, attachments, alternatives }) => {
  await sendmail({
    from,
    to,
    subject: "Send verification Email to user",
    text: "Verification Email",
    html: "<h1>Verification Email</h1>",
  });
};
const welcomeMail = async ({ from, to, new_user }) => {
  await sendmail({
    from,
    to,
    subject: "Welcome",
    text: `Hey, ${new_user.first_name} thanks for creating an account`,
    html: `<h1>Hey, ${new_user.first_name} thanks for creating an account</h1>`,
  });
};

module.exports = { sendmail, verificationMail, welcomeMail };
