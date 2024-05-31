import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { env } from './config.js';

const app = express();
const PORT = env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    if (!email || !subject || !message) {
      return res.status(400).json({ error: 'Email, subject, and message are required' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.MAIL,
        pass: env.PASSWORD,
      },
    });

    const mailOptions = {
      from: env.MAIL,
      to: env.MAIL,
      subject: subject,
      html: message,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


