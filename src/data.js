// funções de exemplo

import pokemon from "./data/pokemon/pokemon.js";

export const example = () => { }

function rodarModal() {
  const pokemons = document.getElementsByClassName("pokemon");
  for (const pokemon of pokemons) {
    pokemon.addEventListener("click", function () {
      const id = pokemon.getAttribute("data-id");
      abrirModal(id - 1)
    });
  }
}
rodarModal();
function abrirModal(index) {
  let caminho = pokemon.pokemon[index];
  let box2 = `
      <div class="column" >
      <img src=${caminho.img}>
      <p class:"text">${caminho.name}</p>
      <p class:"text">Tipo:${caminho.type}</p>
      <p class:"text">Candy:${caminho.candy}</p>
      <p class:"text">Altura:${caminho.height}</p>
      <p class:"text">Peso:${caminho.weight}</p>
      <p class:"text">Fraqueza:${caminho.weaknesses}</p>
      <p class:"text">Evolução Anterior:${caminho.prev_evolution ? caminho.prev_evolution[0].name : "Não tem evolução"}</p>
      <p class:"text">Proxima Evolução:${caminho.next_evolution ? caminho.next_evolution[0].name : "Não tem evolução"}</p>
      </div>`
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  document.getElementById("modal1").innerHTML = box2;
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  return box2;
}


// função pesquisar por nome
document.getElementById("name-pokemon").oninput = function() {searchName();};
  function searchName (){
  let pokesName = document.getElementById("name-pokemon").value;
  const pokemonName = pokesName.toUpperCase();
  function selectName(x) {
    let namesPokemon = pokemon.pokemon[x].name;
    const names = namesPokemon.toUpperCase();
    if (names.includes(pokemonName)) {
      document.getElementById("div-pokes").innerHTML += `
    <div class="column pokemon" id="pokemon${pokemon.pokemon[x].id}" data-id="${pokemon.pokemon[x].id}">
    <img src=${pokemon.pokemon[x].img}>
    <p class:"text">${pokemon.pokemon[x].name}</p>
    </div>
    `;
    }
  }
  function nomeNoHtml() {
    let nameCards = '';
    for (let i = 0; i < pokemon.pokemon.length; i++) {
      nameCards += selectName(i)
    }
  }
  document.getElementById("div-pokes").innerHTML = "";
  nomeNoHtml();
  rodarModal();
}
// função filtrar por tipo
document.getElementById("filter-type").onchange = function () { filterType() };
function filterType() {
  let filterType = document.getElementById("filter-type").value;
  function selectFilter(x) {
    const types = pokemon.pokemon[x].type;
    if (types.includes(filterType)) {
      document.getElementById("div-pokes").innerHTML += `
      <div class="column pokemon" id="pokemon${pokemon.pokemon[x].id}" data-id="${pokemon.pokemon[x].id}">
      <img src=${pokemon.pokemon[x].img}>
      <p class:"text">${pokemon.pokemon[x].name}</p>
      </div>
      `;
    }
  }
  function tipoNoHtml() {
    let typeCards = '';
    for (let i = 0; i < pokemon.pokemon.length; i++) {
      typeCards += selectFilter(i)
    }
  }
  document.getElementById("div-pokes").innerHTML = "";
  tipoNoHtml();
  rodarModal();
}

// função filtrar por fraqueza
document.getElementById("filter-weakness").onchange = function () { filterWea() };
function filterWea() {
  let weakFilter = document.getElementById("filter-weakness").value;
  function selectWeak(x) {
    const weaknesses = pokemon.pokemon[x].weaknesses;
    if (weaknesses.includes(weakFilter)) {
      document.getElementById("div-pokes").innerHTML += `
        <div class="column pokemon" id="pokemon${pokemon.pokemon[x].id}" data-id="${pokemon.pokemon[x].id}">
        <img src=${pokemon.pokemon[x].img}>
        <p class:"text">${pokemon.pokemon[x].name}</p>
        </div>
        `;
    }
  }
  function fraquezaNoHtml() {
    let weakCards = '';
    for (let i = 0; i < pokemon.pokemon.length; i++) {
      weakCards += selectWeak(i)
    }
  }
  document.getElementById("div-pokes").innerHTML = "";
  fraquezaNoHtml();
  rodarModal();
}




//função ordenar
var orderAZ = (a, b) => a["name"].localeCompare(b["name"])
var orderByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
var orderSpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
var caminho = pokemon.pokemon;
export function orderPokes(order) {
    switch (order) {
    case "size":
      return caminho.sort((a, b) => orderByHeight(a, b))
      
      break

    case "order-spawn":
      return caminho.sort((a, b) => orderSpawnChance(a, b))
      
      break
    case "order-az":
      return caminho.sort((a, b) => orderAZ(a, b))

      break

      

  }

}




