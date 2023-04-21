/*
    1) Faça um algoritmo que, dadas 3 notas de um aluno em um semestre, calcule e imprima sua média e classificação
    conforme a tabela abaixo.

    Média = (nota1 + nota2 + nota3) / 3

    Classificação:
     - Média < 5 - Reprovado;
     - 5 <= Média <= 7 - Recuperação;
     - Média > 7 - Aprovado;
*/

// Declaro notas do aluno como constantes.
const nota1 = 7, nota2 = 6, nota3 = 6;

// Declaro variável para guardar a média e classificação.
let media;
let classificacao;

// Cálculo da média como dado.
media = (nota1 + nota2 + nota3) / 3;

// Atribúo valor da classificação de acordo com os parâmetros dados.
if(media < 5) classificacao = 'reprovado';
else if(media <= 7) classificacao = 'de recuperação';
else classificacao = 'aprovado';

// Faço uso de uma template literal para inserir as variáveis numa string e imprimo no console.
console.log(`A média do aluno foi ${media.toFixed(2)}.
O aluno está ${classificacao}.`);