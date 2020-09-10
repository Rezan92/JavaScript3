function main() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const body = document.body;
  const container = document.createElement("div");
  const btnGetPokemon = document.createElement("button");
  const selectPokemon = document.createElement("select");
  const pokemonImage1 = document.createElement("img");
  const pokemonImage2 = document.createElement("img");

  btnGetPokemon.textContent = "Get Pokemon";
  container.classList.add("container", "mt-5", "bg-dark");
  btnGetPokemon.classList.add("btn", "btn-success");
  selectPokemon.classList.add("d-block", "btn", "btn-success", "mt-3");
  pokemonImage1.classList.add("w-25", "mt-3");
  pokemonImage2.classList.add("w-25", "mt-3");

  body.appendChild(container);
  container.appendChild(btnGetPokemon);
  container.appendChild(selectPokemon);
  container.appendChild(pokemonImage1);
  container.appendChild(pokemonImage2);

  btnGetPokemon.addEventListener("click", () => fetchData(URL, displayPokemonName));
  selectPokemon.addEventListener("change", () => fetchData(URL, displayPokemonImage));

  function fetchData(url, callback) {
    fetch(url)
      .then(res => res.json())
      .then(data => data.results ? callback(data.results) : callback(data))
      .catch(error => console.log(error))
  };

  function displayPokemonName(array) {
    array.forEach((pokemon, i) => {
      selectPokemon.innerHTML += `<option>${i + 1}-${pokemon.name}</option>`;
    })
  };

  function displayPokemonImage(array) {
    array.forEach((pokemon, i) => {
      if (`${i + 1}-${pokemon.name}` === selectPokemon.value) {
        fetchData(pokemon.url, addImage);
      }
    });
  };

  function addImage(data) {
    pokemonImage1.src = data.sprites.back_default;
    pokemonImage2.src = data.sprites.front_default;
  };
};

window.addEventListener("load", main());