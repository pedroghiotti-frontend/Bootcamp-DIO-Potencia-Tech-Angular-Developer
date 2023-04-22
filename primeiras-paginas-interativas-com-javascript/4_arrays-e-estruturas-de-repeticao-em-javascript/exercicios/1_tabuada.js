// 1) Crie um programa que, dado um número, imprima sua tabuada.

(function () {
    // Declaro parâmetro de input como constante.
    const n = 5;

    // Crio um for loop que itera 10 vezes.
    for(let i = 0; i < 10; i++)
    {
        // Adiciono 1 ao índice pois começa por 0, calculo o n*i e imprimo no console.
        console.log( (n * (i + 1)) );
    }
})();