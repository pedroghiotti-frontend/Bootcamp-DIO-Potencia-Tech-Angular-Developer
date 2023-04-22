// Importo as funções do script 'funcoes-auxiliares.js' e guardo em um objeto.
const funcoesAux = require('./funcoes-auxiliares');

console.log(funcoesAux);

// Assim tenho que acessar a função dentro do objeto.
// print('Texto');
funcoesAux.print('Texto');

// Posso também desestruturar o objeto ao recebê-lo.
// Assim eu, automáticamente, declaro as funções nesse objeto e puxo as de mesmo nome do objeto importado.
const {print, gets} = require('./funcoes-auxiliares')

// Como declarei essas funções nesse script, posso acessá-las diretamente.
print('Texto');