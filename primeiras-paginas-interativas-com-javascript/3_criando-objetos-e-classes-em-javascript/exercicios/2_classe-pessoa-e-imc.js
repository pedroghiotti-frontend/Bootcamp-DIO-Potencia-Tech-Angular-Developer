/*
    2) Crie uma classe para representar pessoas.
    Deve ter as propriedades: nome, peso e altura.
    Deve ter a capacidade de dizer seu IMC (IMC = peso / altura**2).
    Crie uma pessoa chamada José com o peso de 70kg e altura de 1.75m.
    Peça a José que diga seu IMC.
*/

// Definição da classe 'Pessoa'.
class Pessoa
{
    constructor(nome, peso, altura)
    {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    nome;
    peso;
    altura;

    // Definição do método para calcular o IMC.
    CalcularImc()
    {
        return (this.peso / (this.altura**2)).toFixed(2);
    }

    // Definição do método para avaliar o IMC, faz uso da função 'CalcularImc' dessa mesma classe.
    ClassificarImc()
    {
        const imc = this.CalcularImc();
        let condicao;

        if(imc < 18.5) condicao = 'abaixo do peso';
        else if(imc < 25) condicao = 'com peso normal';
        else if(imc < 30) condicao = 'acima do peso';
        else if(imc < 40) condicao = 'obeso';
        else condicao = 'gravemente obeso';

        return condicao;
    }
}

// Método para descrever condição de dada pessoa, formata os dados e imprime no console.
// Os valores em si são calculados pela própria instância recebida pelo método.
function DescreverCondicao(pessoa)
{
    console.log(`Com o IMC de ${pessoa.CalcularImc()}, ${pessoa.nome} está ${pessoa.ClassificarImc()}.`);
}

// Cria duas instâncias da classe 'Pessoa' e uso o método 'DescreverCondicao' para imprimir os dados no console.
const jose = new Pessoa('José', 70, 1.75);
DescreverCondicao(jose);

const eu = new Pessoa('Pedro', 80.5, 1.83);
DescreverCondicao(eu);