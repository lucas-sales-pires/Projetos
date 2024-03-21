import express from 'express';
import banco from './dbConfig.js';
import enviarEmail from './enviarEmail.js';

const routeremail = express.Router();

routeremail.post('/enviar-email', (req, res) => {
    const codigoRecuperacao = Math.floor(100000 + Math.random() * 900000).toString();
    const mensagem = `Seu código de recuperação é: ${codigoRecuperacao}`;
    const assunto = "Recuperação de senha";


    const { email } = req.body;
    const consulta = 'SELECT * FROM usuarios WHERE email = ?';

    banco.query(consulta, [email], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao enviar e-mail');
            return;
        }
        if (resultado.length === 0) {
            res.status(404).send('E-mail não cadastrado');
            return;
        }

        enviarEmail(email, assunto, mensagem, codigoRecuperacao);

        res.status(200).json({ message: 'E-mail enviado com sucesso', numeroAleatorio: codigoRecuperacao });
    });
});

export default routeremail
