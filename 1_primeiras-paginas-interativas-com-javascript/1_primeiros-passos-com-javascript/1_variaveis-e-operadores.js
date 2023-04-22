/*
    Faça um programa para calcular o valor gasto com combustível em uma viagem.
    Você terá as variáveis:

        1 - Preço do combustível;
        2 - Gasto médio de combustível do carro por KM;
        3 - Distância em KM da viagem.

    Imprima no console o valor gasto para realizar a viagem.
*/

// Declaro variáveis do exercício como constantes.
const precoCombustivel = 5.79;
const gastoMedioLitrosKm = 0.1;
const distanciaKm = 100;

// Declaro variável para guardar o resultado do cálculo do custo.
let valorGasto;

// Cálculo do custo e atribuição do resultado à variáel 'valorGasto'.
valorGasto = (precoCombustivel * gastoMedioLitrosKm) * distanciaKm;

// Registro o resultado no console, fazendo uso de uma *template literal* para inserir o valor calculado no texto.
// O método 'toFixed' limita o número de casas decimais mostradas.
console.log(`O custo da viagem é de ${valorGasto.toFixed(2)} R$.`);