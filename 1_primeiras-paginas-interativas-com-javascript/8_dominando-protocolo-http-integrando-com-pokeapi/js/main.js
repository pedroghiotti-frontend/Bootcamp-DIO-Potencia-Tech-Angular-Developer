const pokemonList = document.getElementById('pokemon-list');
const loadButton = document.getElementById('load-more');

let currentOffset = 0;

// Insiro dados do pokemon recebido na estrutura de HTML préviamente desenvolvida.
function PokemonToHtmlLi(pokemon)
{
    const html =
    `<li class="pokemon-card ${pokemon.mainType}">
        <span class="pokemon-name">${pokemon.name}</span>
        <span class="pokemon-number">#${pokemon.number}</span>
        <ol class="type-list">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img class="pokemon-img" src=${pokemon.sprite} alt="${pokemon.name}">
    </li>`;

    return html;
}

function LoadPokemonsToList(n = 10)
{
    if(currentOffset >= 151) return;
    if(currentOffset + n > 151) 
    {
        n = 151 - currentOffset;
        loadButton.remove();
    }

    pokeApi.getPokemons(currentOffset, n).then((pokemons = []) => 
    {
        /*
            A linha de código abaixo e o código comentado cumprem a mesma função.
            Na versão de uma linha só, eu simplifico o código. Segue algumas observações:
                - Percebo que a função de transformação dentro do map não incorpora nenhum
                funcionamento adicionalcom relação a função 'PoemonToHtmlLi', portanto
                posso passar a função diretamente em vez de declarar uma nova que só age como
                intermediária.
                - Deixo de guardar a lista passo-a-passo para fazer todas as conversões que eu preciso
                e inserir o resultado no HTML na mesma linha.
        */

        pokemonList.innerHTML += pokemons.map(PokemonToHtmlLi).join('');

        /*
        const pokemonsHtmlList = pokemons.map((pokemon) =>
        {
            return ConvertPokemonToHtmlLi(pokemon);
        });
        
        const pokemonsHtml = pokemonsHtmlList.join();

        pokemonList.innerHTML += pokemonsHtml;
        */

    });

    currentOffset += n;
}

// Binding Events //
loadButton.addEventListener('click', () => LoadPokemonsToList(80));

// Main //
(() => {
    LoadPokemonsToList();
})();