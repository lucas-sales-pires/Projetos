import express from 'express';
import bcrypt from 'bcrypt';
import banco from './dbConfig.js';

const routeraut = express.Router();

// Cadastro de usuário
routeraut.post('/cadastro', (req, res) => {
    const { nome, email, cep, cidade, endereco, telefone, senha, confirmarSenha } = req.body;

    const senhaCriptografada = bcrypt.hashSync(senha, 10);

    if (senha !== confirmarSenha) {
        res.status(400).send('Senhas não conferem');
        return;
    } else {
        const consulta = 'SELECT email FROM usuarios WHERE email = ?';

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

routeraut.post('/login', (req, res) => {
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
        const usuario = resultado[0];
        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha);

        if (senhaCorreta) {
            res.status(200).send('Login realizado com sucesso');
        } else {
            res.status(401).send('Senha incorreta');
        }
    });
});

export default routeraut;
