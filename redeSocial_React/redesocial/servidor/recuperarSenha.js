import express from "express";
import bcrypt from "bcrypt";
import banco from "./dbConfig.js";

const routerrec = express.Router();


routerrec.put('/recuperar-senha', (req, res) => {
    const { email, novaSenha } = req.body;
    console.log(email, novaSenha)

    const senhaCriptografada = bcrypt.hashSync(novaSenha, 10);
    const sql = 'UPDATE usuarios SET senha = ? WHERE email = ?';

    banco.query(sql, [senhaCriptografada, email], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao recuperar senha');
            return;
        }
        res.status(200).send('Senha atualizada com sucesso');
    });
});

export default routerrec;

