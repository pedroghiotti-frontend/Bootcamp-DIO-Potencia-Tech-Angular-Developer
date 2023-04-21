/*
    Faça um programa para calcular o valor gasto com combustível em uma viagem.
    Você terá as variáveis:

        1 - Preço do etanol;
        2 - Preço da gasolina;
        3 - Tipo de combustível usado pelo carro;
        4 - Gasto médio de combustível do carro por KM;
        5 - Distância em KM da viagem.

    Imprima no console o valor gasto para realizar a viagem.
*/

// Declaro variáveis do exercício como constantes.
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const combustivelUsado = 'etanol';
const gastoMedioLitrosKm = 0.1;
const distanciaKm = 100;

// Declaro variáveis para guardas resultado do cálculo e preço do combustível usado.
let valorGasto;
let precoCombustivel;

//  Atribuo a 'precoCombustivel' o valor do combustível usado.
if(combustivelUsado === 'etanol') precoCombustivel = precoEtanol;
else precoCombustivel = precoGasolina;

// Poderia também utilizar essa estrutura, optei por manter os condicionais pra seguir o exercício.
// precoCombustivel = combustivelUsado == 'etanol' ? precoEtanol : precoGasolina;

// Cálculo do custo e atribuição do resultado à variáel 'valorGasto'.
valorGasto = (precoCombustivel * gastoMedioLitrosKm) * distanciaKm;

// Registro o resultado no console, fazendo uso de uma *template literal* para inserir o valor calculado no texto.
// O método 'toFixed' limita o número de casas decimais mostradas.
console.log(`O custo da viagem é de ${valorGasto.toFixed(2)} R$.`);