const { expect } = require('chai');
const { minificarHTML } = require('./gulpfile');  // Importe a tarefa específica que deseja testar
const fs = require('fs');

describe('Tarefas Gulp', () => {
  it('Deveria minificar HTML', (done) => {
    // Chame a tarefa e aguarde sua conclusão antes de realizar as verificações
    minificarHTML();

    // Defina um tempo de espera (pode ser ajustado conforme necessário)
    setTimeout(() => {
      // Verifique se o arquivo minificado foi gerado corretamente
      const arquivoMinificado = fs.readFileSync('./build/min.html', 'utf-8');

      // Realize as verificações necessárias
      expect(arquivoMinificado).to.include('<html>');  // Substitua isso com uma verificação real

      // Chame a função "done" para indicar que o teste foi concluído
      done();
    }, 1000);  // Aguarde 1 segundo (pode ser ajustado conforme necessário)
  });
});
