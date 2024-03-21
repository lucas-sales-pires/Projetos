import mysql from 'mysql';

const banco = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'redesocial'
});

export default banco;
