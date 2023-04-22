// 2) Crie um programa que percorra uma lista de números e imprima aqueles que são pares.

(function (){
    // Declaro lista de números a ser percorrida.
    const lst = [1, 25, 8, 3, 49, 52, 4];

    // Foreach funciona de modo similar ao que estou acostumado e tenho acesso ao indice de forma simples.
    lst.forEach((n, i, arr) => 
    {
        if((n % 2) == 0) console.log(`lst[${i}]: ${n}`);
    });
})();