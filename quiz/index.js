const axios = require('axios');

const apiUrl = 'https://json.org/example.html';

axios.get(apiUrl)
  .then(function (response) {
    console.log('Dados da resposta:', response.data);
  })
  .catch(function (error) {
    console.log('Erro:', error);
  });
