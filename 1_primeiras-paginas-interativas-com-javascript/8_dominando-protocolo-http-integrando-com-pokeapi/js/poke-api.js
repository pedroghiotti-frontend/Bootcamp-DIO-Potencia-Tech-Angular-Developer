const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) =>{
    return fetch(pokemon.url)
    .then((res) => res.json());
}

pokeApi.getPokemons = (offset = 20, limit = 10) =>{

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((res) => res.json())
    .then((body) => body.results.map(pokeApi.getPokemonDetails))
    .then((detailReqs) => Promise.all(detailReqs))
    .then((pokemonDetails) => pokemonDetails.map(pokeApi.detailsToPokemon))
    .then((pokemon) => {console.log(pokemon); return pokemon;})
    .catch((err) => console.log(err));
};

pokeApi.detailsToPokemon = (pokeApiDetails) => {
    const pokemon = new Pokemon();
    
    pokemon.number = pokeApiDetails.id;
    pokemon.name = pokeApiDetails.name;
    pokemon.types = pokeApiDetails.types.map((types) => types.type.name);
    pokemon.mainType = pokemon.types[0];
    pokemon.sprite = pokeApiDetails.sprites.other['official-artwork'].front_default;

    return pokemon;
}