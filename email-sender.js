const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

let mailOptions = {
  to: "amelrazinijob5@gmail.com",
  subject: "this is a test mail",
  text: "this is a test mail from email-sender ",
};
