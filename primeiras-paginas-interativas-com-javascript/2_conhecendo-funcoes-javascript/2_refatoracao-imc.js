/*
    2)  O IMC (Índice de Massa Corporal) é um critério da Organização Mundial da Saúde para dar uma indicação
    sobre a condição de peso de uma pessoa adulta.

    IMC = peso / (altura * altura)

    Elabore um algoritmo que, dado o peso e a altura de um indivíduo, classifique-o conforme a tabela abaixo.

    IMC em adultos:
     - Abaixo de 18.5 - Abaixo do peso;
     - Entre 18.5 e 25 - Peso normal;
     - Entre 25 e 30 - Acima do peso;
     - Entre 30 e 40 - Obeso;
     - Acima de 40 - Obesidade grave.
*/

function CalcularImc(pesoKg, alturaMetros)
{
    // Cálculo do imc como dado.
    // Utilizei o operador exponencial ('**') em vez da função pow para calcular potência.
    return pesoKg / (alturaMetros**2);
}

function AvaliarImc(imc)
{
    let condicao;

    // Atribuo valor à classificação com base na tabela dada.
    if(imc < 18.5) condicao = 'abaixo do peso';
    else if(imc < 25) condicao = 'com peso normal';
    else if(imc < 30) condicao = 'acima do peso';
    else if(imc < 40) condicao = 'obeso';
    else condicao = 'gravemente obeso';

    return condicao;
}

// Função principal está sendo definida como anônima e imediatamente invocada.
(function () {
    // Declaro parâmetros de input como constantes.
    const pesoKg = 80.5, alturaMetros = 1.83;

    // Calculo IMC através da função criada.
    const imc = CalcularImc(pesoKg, alturaMetros);
    
    // Faço uso de uma template literal para inserir as variáveis numa string e imprimo no console.
    console.log(`Com o IMC de ${imc.toFixed(3)}, o indivíduo está ${AvaliarImc(imc)}.`);
})();