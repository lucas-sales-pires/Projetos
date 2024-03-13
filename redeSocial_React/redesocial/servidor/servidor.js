import cors from 'cors';
import express from 'express';
import mysql from 'mysql';

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

//Cadastro de usuário

app.post('/cadastro', (req, res) => {
    const { nome, email, cep, cidade, endereco, telefone, senha } = req.body;
    const consulta = 'SELECT * FROM usuarios WHERE email = ?';

    banco.query(consulta, [email], (erro, resultado) => {
        if (resultado.length > 0) {
            res.status(409).send('E-mail já cadastrado');
            return;

        } else {

            const sql = 'INSERT INTO usuarios (nome, email, cep, cidade, endereco, telefone, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';

            banco.query(sql, [nome, email, cep, cidade, endereco, telefone, senha], (erro, resultado) => {
                if (resultado) {
                    res.status(201).send('Usuário cadastrado com sucesso');
                }
                if (erro) {
                    res.send('Erro ao cadastrar usuário');
                    return;
                }
            });
        }
    });
});

//Login de usuário

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const consulta = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';


    banco.query(consulta, [email, senha], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao realizar login');
            return;
        }
        if (resultado.length > 0) {
            res.status(200).send('Login realizado com sucesso');
        }
        if (resultado.length === 0) {
            res.status(404).send('Usuário não encontrado');
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

