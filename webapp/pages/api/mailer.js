import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
    
        auth: {
            user: 'postmaster@sandbox84db8f1c116a4a658c7238d322cd8e41.mailgun.org',
            pass: 'bf83090a08e8ef10b3ca559b1270262e-15b35dee-04ee51a2'
        }
     }   
    );

    try {
        const info = await transporter.sendMail({
            from: `Contact Form <${email}>`,
            to: 'icstsre@gmail.com',
            subject: 'New message from contact form',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          });
        console.log(`Message sent: ${info.messageId}`);
        res.status(200).json({message: "Message sent"});
    }catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error occured while trying to send the email'});
    }
}