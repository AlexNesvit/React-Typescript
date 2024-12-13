function PokemonCard() {
    // On récupère le premier Pokémon de la liste
    const pokemon = pokemonList[1];

    return (
        <figure>
            {
                pokemon.imgSrc 
                ? <img src={pokemon.imgSrc} alt={pokemon.name} />
                : <p>???</p>
            }
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard;