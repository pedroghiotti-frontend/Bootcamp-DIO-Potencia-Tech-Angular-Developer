/*
    1) Uma sala contém 5 alunos e, para cada, foi sorteado um número de 1 - 100.
    Faça um programa que receba os números sorteados para os alunos e mostre o maior deles.

    Ex.:
        Entrada: 5, 50, 10, 98, 23
        Saída: 98
*/

// Importo os métodos declarados em 'funcoes-auxiliares.js'.
const { print, gets } = require("../funcoes-auxiliares");

// Declaro variável responsável por guardar o maior número recebido.
let maior = 0;

// Como foi dado que a classe tem 5 alunos, realizo 5 iterações de um loop.
for(let i = 0; i < 5; i++)
{
    // Recebo o valor mockado e, se for maior que o maior número encontrado até agora, o valor é guardado.
    n = gets();
    maior = n > maior ? n : maior;
}

// Uso o método 'print' importado para mostrar o resultado no console.
print(maior);