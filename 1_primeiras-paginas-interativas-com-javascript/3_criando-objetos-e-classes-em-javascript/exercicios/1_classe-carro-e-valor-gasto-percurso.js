/*
    1) Crie uma classe para representar carros.
    Deve ter as propriedades: marca, cor e gasto de combustível / Km rodado.
    Crie um método que, dada a qtd. de Km do percurso e o preço do combustível,
    calcule o valor gasto em reais para a realização de dado percurso.
*/

// Definição da classe 'Carro'.
class Carro
{
    constructor(marca, cor, gastoCombustivelKm)
    {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelKm = gastoCombustivelKm;
    }

    marca;
    cor;
    gastoCombustivelKm;

    // Definição do método para calcular gasto em dado percurso.
    CalcularValorGastoEmPercurso(percursoKm, precoCombustivel)
    {
        return (percursoKm * this.gastoCombustivelKm * precoCombustivel).toFixed(2);
    }
}

// Declarei parâmetros de input como constantes.
const percursoKm = 100, precoCombustivel = 6.66;

// Crio duas instâncias da classe 'Carro' e calculo o gasto de combustível de ambos em um mesmo percurso.
const ventania = new Carro('Volkswagen', 'Azul', (1 / 12));
console.log(ventania.CalcularValorGastoEmPercurso(percursoKm, precoCombustivel));

const brasilia = new Carro('Volkswagen', 'Amarelo', (1 / 9));
console.log(brasilia.CalcularValorGastoEmPercurso(percursoKm, precoCombustivel));
