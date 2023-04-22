// A função gets é um mock. Sua funcionalidade seria a de receber input.
// Atualmente ela retorna, um por um, os valores da lista 'entradas'.
// Ao chegar no fim da lista, retorna ao início.

const entradas = [5, 50, 10, 98, 23];
let i = 0; 

function gets()
{
    const n = entradas[i]
    i++;
    if(i >= entradas.length) i = 0;
    return n;
}

function print(texto)
{
    console.log(texto);
}

module.exports = {gets, print};