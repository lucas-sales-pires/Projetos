import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 3001;

const banco = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'redesocial'
});

app.use(cors());
app.use(express.json());


// Cadastro de usuário

app.post('/cadastro', (req, res) => {
    const { nome, email, cep, cidade, endereco, telefone, senha, confirmarSenha } = req.body;

    const senhaCriptografada = bcrypt.hashSync(senha, 10);

    if (senha !== confirmarSenha) {
        res.status(400).send('Senhas não conferem');
        return;
    } else {
        const consulta = 'SELECT * FROM usuarios WHERE email = ?';

        banco.query(consulta, [email], (erro, resultado) => {
            if (erro) {
                res.status(500).send('Erro ao cadastrar usuário');
                return;
            }
            if (resultado.length > 0) {
                res.status(409).send('E-mail já cadastrado');
                return;
            } else {
                const sql = 'INSERT INTO usuarios (nome, email, cep, cidade, endereco, telefone, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';

                banco.query(sql, [nome, email, cep, cidade, endereco, telefone, senhaCriptografada], (erro, resultado) => {
                    if (erro) {
                        res.status(500).send('Erro ao cadastrar usuário');
                        return;
                    }
                    res.status(201).send('Usuário cadastrado com sucesso');
                });
            }
        });
    }
});

// Login de usuário

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const consulta = 'SELECT * FROM usuarios WHERE email = ?';

    banco.query(consulta, [email], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao realizar login');
            return;
        }
        if (resultado.length === 0) {
            res.status(404).send('Usuário não encontrado');
            return;
        }
        const senhaCorreta = bcrypt.compareSync(senha, resultado.senha);

        if (senhaCorreta) {
            res.status(200).send('Login realizado com sucesso');
        } else {
            res.status(401).send('Senha incorreta');
        }
    });
});


// Recuperação de senha 

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

app.post('/enviar-email', (req, res) => {
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




app.listen(port, () => {

    console.log(`Server is running at http://localhost:${port}`);
});
