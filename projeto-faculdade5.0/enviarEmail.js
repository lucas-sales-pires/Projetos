const nodemailer = require('nodemailer');
const randomize = require('randomatic');
let seg =randomize('0',6);


let transporter = nodemailer.createTransport({
    service: "Outlook365",
    secure: false, 
    auth: {
        user: "diegofrancosales@outlook.com",
        pass: "Diego2017",
    }
});

// Enviar e-mail
transporter.sendMail({
            from: "Telecall-Recuperação <diegofrancosales@outlook.com>",
            to: "saleslucas2009@gmail.com",
            subject: "Recuperação de Senha",
            text: `Conteúdo do e-mail de recuperação de senha. ${seg}`,
        }).then(message =>{
            console.log(message)
        }).catch(err =>{
            console.log(err)
        })

