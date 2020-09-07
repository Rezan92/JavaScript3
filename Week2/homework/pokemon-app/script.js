function main() {
  let pokemons;
  const body = document.body;
  const container = document.createElement("div")
  const btnGetPokemon = document.createElement("button");
  const btnSelectPokemon = document.createElement("select");
  const pokemonImage1 = document.createElement("img");
  const pokemonImage2 = document.createElement("img");

  btnGetPokemon.textContent = "Get Pokemon";
  container.classList.add("container", "mt-5", "bg-dark");
  btnGetPokemon.classList.add("btn", "btn-success");
  btnSelectPokemon.classList.add("d-block", "btn", "btn-success", "mt-3");
  pokemonImage1.classList.add("w-25", "mt-3");
  pokemonImage2.classList.add("w-25", "mt-3");

  body.appendChild(container);
  container.appendChild(btnGetPokemon);
  container.appendChild(btnSelectPokemon);
  container.appendChild(pokemonImage1);
  container.appendChild(pokemonImage2);

  btnGetPokemon.addEventListener("click", fetchData);
  btnSelectPokemon.addEventListener("change", addPokemonToDOM);

  function fetchData() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(res => res.json())
      .then(data => {
        pokemons = data.results;
        pokemons.forEach((pokemon, i) => {
          btnSelectPokemon.innerHTML += `<option>${i + 1}-${pokemon.name}</option>`;
        });
      })
      .catch(error => console.log(error))
  };

  function addPokemonToDOM() {
    pokemons.forEach((pokemon, i) => {
      if (`${i + 1}-${pokemon.name}` === btnSelectPokemon.value) {
        fetch(pokemon.url)
          .then(res => res.json())
          .then(data => {
            pokemonImage1.src = data.sprites.back_default;
            pokemonImage2.src = data.sprites.front_default;
          })
          .catch(error => console.log(error))
      }
    })
  }
};

main();