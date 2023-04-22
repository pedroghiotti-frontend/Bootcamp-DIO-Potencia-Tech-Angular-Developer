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
    Aproveitando a refatoração, adaptei o programa para receber apenas 3 formas de pagamento:
     1- À vista no débito - 10% de desconto;
     2 - À vista no dinheiro ou pix - 15% de desconto;
     3 - Parcelado;
    Ao calcular o valor, avalia o número de parcelas para aplicar ou não os juros.
*/

// Calcula valor com um desconto percentual.
function CalcularValorDescontado(valor, descontoPorcento)
{
    return valor - ((descontoPorcento / 100) * valor);
}

// Calcula valor total após aplicação de juros compostos.
function CalcularTotalJurosCompostos(valor, jurosPorcento, parcelas)
{
    return valor * (1 + (jurosPorcento/100))**parcelas;
}

// Avalia a forma de pagamento e escolhe a função e os valores corretos para calcular o valor total.
function CalcularTotal(valor, formaPagamento, parcelas = 1)
{
    switch(formaPagamento)
    {
        case 1: // À vista no débito - 10% de desconto.
            return CalcularValorDescontado(valor, 10);
            break;
        case 2: // À vista no dinheiro ou pix - 15% de desconto.
            return CalcularValorDescontado(valor, 15);
            break;
        case 3: // Parcelado, aplico juros se for em mais de duas vezes.
            if(parcelas <= 2) return valor;
            else return CalcularTotalJurosCompostos(valor, 10, parcelas);
            break;
    }
}

// Função principal está sendo definida como anônima e imediatamente invocada.
(function () {
    // Declaro parâmetros de input como constantes.
    const precoBase = 1000, formaPagamento = 3, parcelas = 12;
    
    // Calculo valor total através da funcão criada.
    const valorTotal = CalcularTotal(precoBase, formaPagamento, parcelas);
    
    // Faço uso de uma template literal para inserir o valor total numa string e imprimo no console.
    console.log(`O valor total a ser pago é de ${valorTotal.toFixed(2)} R$.`);
})();