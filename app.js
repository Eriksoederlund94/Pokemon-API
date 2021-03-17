const pokeContainer = document.querySelector("#poke_grid");

const getPokemon = async (id) => {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await url.json();
  createPokemonCard(pokemon);
};

const fetchPokemons = async () => {
  for (let i = 1; i <= 150; i++) {
    await getPokemon(i);
  }
};

function createPokemonCard(pokemon) {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");
  const pokeInfo = `
<div class="pokeinfo">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
  <p class="number">Number: ${pokemon.id}</p>
  <p class="name">Name: ${pokemon.name}</p>
  <p class="type"> Type: ${pokemon.types[0].type.name} </p>
</div>`;
  pokemonElement.innerHTML = pokeInfo;
  pokeContainer.appendChild(pokemonElement);
}

fetchPokemons();
