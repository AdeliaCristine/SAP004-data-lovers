import { orderPokes, selectFilter, selectWeak } from './data.js';

import data from './data/pokemon/pokemon.js';

//Botão topo
window.onscroll = function () {
  scroll();
}
function scroll() {
  let btnTop = document.getElementById("btn-top")
  if (document.documentElement.scrollTop > 0) {
    btnTop.style.display = "block"
  } else {
    btnTop.style.display = "none"
  }
}

let scrollTop = function (evt) {
  evt.preventDefault();
  window.scrollTo(0, 0);
};
document.getElementById("btn-top").addEventListener("click", scrollTop);


function pokemonImage(numeroDoIdDoPersonagem,banco ) {
 const way = banco[numeroDoIdDoPersonagem];
 
  let box = `
      <div class="column pokemon" id="pokemon${way.id}" data-id="${way.id}" >
      <img src=${way.img}>
      <p class="text">${way.name}</p>
      </div>
`;
  return box ; 
}

function criaImagemNoHtml(teste) {
  let htmlCards = '';
  for (let i = 0; i < teste.length; i++) {

    htmlCards += pokemonImage(i, teste)
  }
  document.getElementById("div-pokes").innerHTML += htmlCards;
}
criaImagemNoHtml(data.pokemon);
const pokemons = document.getElementsByClassName("pokemon");

function rodarModal() {
  for (const pokemon of pokemons) {
    pokemon.addEventListener("click", function () {
      const id = pokemon.getAttribute("data-id");
      abrirModal(id)
    });
  }
}
rodarModal();
function abrirModal(index) {
  const caminho = data.pokemon.find(pokemon => pokemon.id == index)
  let box2 = `
      <div class="column" >
      <img src=${caminho.img}>
      <p class="text">${caminho.name}</p>
      <p class="text">Tipo:${caminho.type}</p>
      <p class="text">Candy:${caminho.candy}</p>
      <p class="text">Altura:${caminho.height}</p>
      <p class="text">Peso:${caminho.weight}</p>
      <p class="text">Fraqueza:${caminho.weaknesses}</p>
      <p class="text">Evolução Anterior:${caminho.prev_evolution ? caminho.prev_evolution[0].name : "Não tem evolução"}</p>
      <p class="text">Proxima Evolução:${caminho.next_evolution ? caminho.next_evolution[0].name : "Não tem evolução"}</p>
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



// função filtrar por tipo
document.getElementById("filter-type").onchange = function typeFilter(){
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const filtrado = selectFilter(data.pokemon)
  criaImagemNoHtml(filtrado)
    rodarModal() }




// função filtrar por fraquezas
document.getElementById("filter-weakness").onchange = function filterWeak() {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const filtrado = selectWeak(data.pokemon)
  criaImagemNoHtml(filtrado)
  //console.log(filtrado)
  rodarModal()
}




let searchOrder = document.getElementById("order-search")
document.getElementById("order-search").onchange = function () {
  const ordenada = orderPokes(searchOrder.value)
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  let template = ""
  for (let i = 0; i < data.pokemon.length; i++) {
    template += pokemonImage(i, ordenada)
  }
  htmlCards.innerHTML = template
  rodarModal()
}



