import {  orderPokes,  selectName,  selectFilter,  selectWeak}
 from './data.js';
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

function pokemonImage(numeroDoIdDoPersonagem, banco) {
  const way = banco[numeroDoIdDoPersonagem];

  let box = `
      <div class="column pokemon backgray" id="pokemon${way.id}" data-id="${way.id}" >
      <img src=${way.img}>
      <p class="text">${way.name}</p>
      </div>
`;
  return box;
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
      <div class="column backgray" >
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
  let modal = document.getElementById("details");
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

//Limpar Campos: Tipos, fraquezas e Ordem  *colocar na função nome
function limpaCamposTiposFraquezasOrdem() {
  document.getElementById("filter-type").value = "";
  document.getElementById("div-calc").innerHTML = "";
  document.getElementById("filter-weakness").value = "";
  document.getElementById("order-search").value = "";
  }

//Limpar Campos: Nome, fraquezas e Ordem *colocar na função tipo 2
function limpaCamposNomeFraquezasOrdem() {
  document.getElementById("name-pokemon").value = "";
  document.getElementById("filter-weakness").value = "";
  document.getElementById("order-search").value = "";

}

//Limpar Campos: Nome,Tipos e Ordem *colocar na função fraqueza 3
function limpaCamposNomeTiposOrdem() {
  document.getElementById("name-pokemon").value = "";
  document.getElementById("filter-type").value = "";
  document.getElementById("div-calc").innerHTML = "";
  document.getElementById("order-search").value = "";
}

//Limpar Campos: Nome,tipo e fraqueza *colocar na função ordem 4
function limpaCamposNomeTiposFraquezas() {
  document.getElementById("name-pokemon").value = "";
  document.getElementById("filter-type").value = "";
  document.getElementById("div-calc").innerHTML = "";
  document.getElementById("filter-weakness").value = "";
}


//Nome
document.getElementById("name-pokemon").oninput = function searchName() {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const pokesName = document.getElementById("name-pokemon").value;
  const pesquisado = selectName(data.pokemon, pokesName)
  criaImagemNoHtml(pesquisado)
  rodarModal()
  limpaCamposTiposFraquezasOrdem()
}

// função filtrar por tipo
document.getElementById("filter-type").onchange = function typeFilter() {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const filterType = document.getElementById("filter-type").value;
  const filtrado = selectFilter(data.pokemon, filterType)
  let result = Math.round((filterType.length/data.length) * 100)/100
  document.getElementById("div-calc").innerHTML=`Temos ${result} % de pokemons do tipo ${filterType}.`
  criaImagemNoHtml(filtrado)
  rodarModal()
  limpaCamposNomeFraquezasOrdem()
  porcentagem()
};

function porcentagem(){
  const way = data.pokemon
  const filterType = document.getElementById("filter-type").value;
  const tipo =  way.filter(search => search.type.includes(filterType))
  let result = Math.round((tipo.length/way.length) * 100)/100


  document.getElementById("div-calc").innerHTML=`Temos ${result} % de pokemons do tipo ${filterType1}.`

}

  


// função filtrar por fraquezas
document.getElementById("filter-weakness").onchange = function filterWeak() {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const weakFilter = document.getElementById("filter-weakness").value;
  const pesquisado = selectWeak(data.pokemon, weakFilter)
  criaImagemNoHtml(pesquisado)
  rodarModal()
  limpaCamposNomeTiposOrdem()
}

// função filtrar por ordem

document.getElementById("order-search").onchange = function () {
  const searchOrder = document.getElementById("order-search")
  const ordenada = orderPokes(data.pokemon, searchOrder.value)
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  let template = ""
  for (let i = 0; i < data.pokemon.length; i++) {
    template += pokemonImage(i, ordenada)
  }
  htmlCards.innerHTML = template
  rodarModal()
  limpaCamposNomeTiposFraquezas()
}
