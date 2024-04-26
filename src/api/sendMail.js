export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, phone, message } = req.body;
      try {
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          service: 'Gmail', 
          auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
          }
        });
  
        const mailOptions = {
          from: 'your-email@gmail.com',
          to: email,
          subject: 'Новое сообщение с вашего сайта',
          text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`
        };
  
        await transporter.sendMail(mailOptions);
        res.status(200).json({ status: 'Email sent' });
      } catch (error) {
        res.status(500).json({ status: 'Error sending email', error });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  