/*
    1) Faça um algoritmo que, dadas 3 notas de um aluno em um semestre, calcule e imprima sua média e classificação
    conforme a tabela abaixo.

    Média = (nota1 + nota2 + nota3) / 3

    Classificação:
     - Média < 5 - Reprovado;
     - 5 <= Média <= 7 - Recuperação;
     - Média > 7 - Aprovado;
*/

function CalcularMedia(notas)
{
    // Aproveitando a refatoração, adaptei o método para que possa receber um número qualquer de notas.
    
    // Calculo soma das notas com o método Array.reduce().
    const total = notas.reduce((total, atual) => total += atual | 0);
    // Calculo a média dividindo o total pelo número de elementos e retorno o valor.
    return total / notas.length;;
}

function AvaliarMedia(media)
{
    let classificacao;

    // Atribúo valor da classificação de acordo com os parâmetros dados.
    if(media < 5) classificacao = 'reprovado';
    else if(media <= 7) classificacao = 'de recuperação';
    else classificacao = 'aprovado';
    
    return classificacao;
}

// Função principal está sendo definida como anônima e imediatamente invocada.
(function () {
    // Declaro notas do aluno como um array de constantes.
    const notas = [7, 6, 3];

    // Calculo a média das notas através da função criada.
    const media = CalcularMedia(notas);
    
    // Faço uso de uma template literal para inserir as variáveis numa string e imprimo no console.
    console.log(`A média do aluno foi ${media.toFixed(2)}.
    O aluno está ${AvaliarMedia(media)}.`);
})();