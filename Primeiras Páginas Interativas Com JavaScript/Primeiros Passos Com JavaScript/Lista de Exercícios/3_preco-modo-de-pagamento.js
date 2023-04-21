/*
    3) Elabore um algoritmo que calcule o valor a ser pago por um produto a depender da forma de pagamento e do valor base.
    O valor a ser pago deve variar conforme a tabela a seguir.

    Código condição de pagamento:
     1 - À vista no débito - 10% de desconto;
     2 - À vista no dinheiro ou pix - 15% de desconto;
     3 - Parcelado em duas vezes - Preço base, sem juros;
     4 - Parcelado acima de duas vezes - Preço base com juros de 10%;
*/

/*
    Escrevi duas implementações, uma que fiz inicialmente e antes de assistir à resolução
    e outra após, incorporando a estratégia de enumerar os casos dados no enunciado.
    Além disso nas minhas implementações, especificamente do caso 4, calculei o valor total
    com juros compostos utilizando uma fórmula. Só pelo enunciado quase usei um for loop pra
    calcular os juros mas no fim das contas a resolução dada foi muito mais simples...
*/

// Implementação inicial:

// Declaro parâmetros de input como constantes.
const precoBase = 1000, parcelas = 1;
const formaPagamento = 'dinheiro' //(dinheiro / debito)

// Declaro variável para guardar o valor total a ser pago.
let valorTotal;

// Verifico o número de parcelas em que o pagamento será dividido.
// Como não há regras definidas em relação à forma de pagamento quando for parcelado, não a levo em consideração.
if(parcelas > 1)
{
    // Verifico se o número de parcelas ultrapassa duas ou não.
    // Caso seja parcelado em apenas duas vezes o preço, como determinado no enunciado, não tem desconto ou acréscimo.
    // Caso contrário, calculo o valor total através de uma fórmula para juros compostos.
    // Meu primeiro pensamento foi utilizar um for loop mas como ainda não foi apresentado no curso, optei pela fórmula.
    if(parcelas <= 2) valorTotal = precoBase;
    else valorTotal = precoBase * (1 + (10/100))**parcelas;
}
else // Se o número de parcelas não for maior do que 1, sei que o pagamento é à vista.
{
    // Declaro variável para guardar o desconto.
    let descontoPorcento;
    
    // Atribúo o valor do desconto de acordo com a forma de pagamento escolhida.
    if(formaPagamento === 'dinheiro') descontoPorcento = 15;
    else descontoPorcento = 10;

    // Atribuo ao valor total o preço base descontado.
    valorTotal = precoBase - ((descontoPorcento / 100) * precoBase);
}

// Faço uso de uma template literal para inserir o valor total numa string e imprimo no console.
console.log(`O valor total a ser pago é de ${valorTotal.toFixed(2)} R$.`);

// Implementação com estratégia mostrada:
/*
const precoBase = 1000, formaPagamento = 4, parcelas = 3;

let valorTotal;

switch(formaPagamento)
{
    case 1: // À vista no débito - 10% de desconto;
        valorTotal = precoBase - ((10 / 100) * precoBase);
        break;
    case 2: // À vista no dinheiro ou pix - 15% de desconto;
        valorTotal = precoBase - ((15 / 100) * precoBase);
        break;
    case 3: // Parcelado em duas vezes - Preço base, sem juros;
        valorTotal = precoBase;
        break;
    case 4: // Parcelado acima de duas vezes - Preço base com juros de 10%;
        valorTotal = precoBase * (1 + (10/100))**parcelas;
        break;
}

console.log(`O valor total a ser pago é de ${valorTotal.toFixed(2)} R$.`);
*/
