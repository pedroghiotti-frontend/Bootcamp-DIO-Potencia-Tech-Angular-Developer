/*
    Objetos
*/

// Declaração de objeto se assemelha a um JSON.
const eu = 
{
    nome: 'Pedro',
    sobrenome: 'Ghiotti',
    idade: 21,
    // Posso definir métodos dentro de um objeto.
    nomeCompleto()
    {
        return `${this.nome} ${this.sobrenome}`;
    },
    descreva()
    {
        console.log(`Nome: ${this.nomeCompleto()}\nIdade: ${this.idade}`);
    }
}

// Posso executando método do objeto.
eu.descreva();

// Um atributo pode ser acessado com um '.' ou pelo seu nome. O valor de um atributo é variável, mesmo que o objeto seja constante.
eu.nome = 'Maria';
eu['idade'] = '17';

// No entanto não posso reatribuir o valor do objeto em si, como esperado.
// eu = {nome: 'José'};

eu.descreva();


/*
    Classes
*/

// Definição de classe se assemelha às do C#, sintaxe de um constructor aqui é até mais intuitiva.
class Pessoa
{
    // Posso executar lógica dentro do construtor.
    // Os parâmetros podem ter um valor default.
    constructor(nome, sobrenome, idade)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = `${nome} ${sobrenome}`;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    nome;
    sobrenome;
    nomeCompleto;
    idade;
    anoNascimento;

    descreva()
    {
        console.log(`Nome: ${this.nomeCompleto}\nIdade: ${this.idade}`);
    }
}

// Classes podem ser instanciadas, funcionam como um modelo.
// Classe é instanciada com 'new' seguido pelos parâmetros definidos no construtor.
const alguem = new Pessoa('Pedro', 'Ghiotti', 21);
const algumOutro = new Pessoa('Maria', 'Ghiotti', 78);

alguem.descreva();
algumOutro.descreva();

// Propriedades podem ser acessadas de maneira similar aos objetos, com '.' por seus nomes.
alguem.nome = "Cícero";
algumOutro['nome'] = "Ana";

console.log(alguem.nome);
console.log(algumOutro.nome);

/*
    Exercício
*/

function CompararIdades(pessoa1, pessoa2)
{
    if(pessoa1.idade === pessoa2.idade)
    {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} têm a mesma idade.`);
        return;
    }

    const maisVelha = pessoa1.idade > pessoa2.idade ? pessoa1 : pessoa2;
    const maisNova = pessoa1.idade < pessoa2.idade ? pessoa1 : pessoa2;

    console.log(`${maisVelha.nome} é mais velho(a) que ${maisNova.nome}.`);
}

CompararIdades(alguem, algumOutro);