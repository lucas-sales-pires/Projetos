import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

const enviarEmail = (para, assunto, mensagem) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: { rejectUnauthorized: false }
    });

    const opcoes = {
        from: process.env.EMAIL_FROM,
        to: para,
        subject: assunto,
        text: mensagem,
    };

    transporter.sendMail(opcoes, (erro, info) => {
        if (erro) {
            console.log('Erro ao enviar e-mail:', erro);
        } else {
            console.log('E-mail enviado com sucesso:', info.response);
        }
    });
};

export default enviarEmail;
