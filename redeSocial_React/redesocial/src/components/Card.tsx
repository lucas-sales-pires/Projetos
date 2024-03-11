import React from 'react'; 

export default function Card(props: any) {
  return (
    <div className='card-container'>
      <h1>{props.nome}</h1>
      <p>{props.email}</p>
      <p>{props.cep}</p>
      <p>{props.endereco}</p>
    </div>
  );
}

/*        {typeof dados != "undefined" && dados.map((valor) => {
          return <Card key={valor.id}
          listCard={dados}
          setListCard={setDados} 
          id={valor.id} 
          nome={valor.nome} 
          email={valor.email} 
          cep={valor.cep} 
          cidade={valor.cidade} 
          endereco={valor.endereco} 
          telefone={valor.telefone} 
          senha={valor.senha} 
          confirmarSenha={valor.confirmarSenha}
          ></Card> 
        })}
*/

/*
app.get('/getCards', (req, res) => {
    let sql = 'SELECT * FROM usuarios';
    banco.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
        }
        res.send(resultado);
    });
}
);
*/


/*

  useEffect(() => {
    axios.get("http://localhost:3001/getCards").then((resposta) => {
      setDados(resposta.data);
    });
  }
    , []);

*/
