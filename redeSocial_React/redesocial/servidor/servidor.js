import express from 'express';
import routerrec from "./recuperarSenha.js"; 
import cors from 'cors';
import routeraut from './autRotas.js';
import routerEmail from './emailRotas.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())
app.use('/autenticacao', routeraut);
app.use('/recuperar-senha', routerrec);
app.use('/email', routerEmail);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
