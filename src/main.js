import { selectName, selectFilter, selectWeak, orderPokes, porcentagem }
  from './data.js';
import data from './data/pokemon/pokemon.js';

/* document.getElementById("btn-go").addEventListener("click", function(){
 window.open("personagens.html")}) */

document.getElementById("home").onclick = () => (
  window.open("index.html"));

document.getElementById("play").onclick = () => (
  window.open("https://www.pokemongo.com/pt-pt/"));

document.getElementById("btn-all").onclick = () => (
  document.location.reload(true));




/*   const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  limpaTudo();
  criaImagemNoHtml(data.pokemon, teste);
  rodarModal() */



window.onscroll = () => (
  scroll());

const scroll = () => {
  let btnTop = document.getElementById("btn-top")
  if (document.documentElement.scrollTop > 0) {
    btnTop.style.display = "block"
  } else {
    btnTop.style.display = "none"
  }
}
document.getElementById("btn-top").onclick = function scrollTop(evt) {
  evt.preventDefault();
  window.scrollTo(0, 0);
};

function pokemonImage(numeroDoIdDoPersonagem, banco) {
  const way = banco[numeroDoIdDoPersonagem];
  let box = `
      <div class="column pokemon backgray" id="pokemon${way.id}" data-id="${way.id}" >
      <img class="pokes-img" src=${way.img}>
      <p class="text">${way.name}</p>
      </div>
`;
  return box;
}

const criaImagemNoHtml = (teste) => {
  let htmlCards = '';
  for (let i = 0; i < teste.length; i++) {
    htmlCards += pokemonImage(i, teste)
  }
  document.getElementById("div-pokes").innerHTML += htmlCards;
}
criaImagemNoHtml(data.pokemon);
const pokemons = document.getElementsByClassName("pokemon");
const rodarModal = () => {
  for (const pokemon of pokemons) {
    pokemon.onclick = () => {
      const id = pokemon.getAttribute("data-id");
      abrirModal(id)
    };
  }
}
rodarModal();
const abrirModal = (index) => {
  const caminho = data.pokemon.find(pokemon => pokemon.id == index)
  let box2 = `
      <div class="column-modal backgray" >
      <img src=${caminho.img}>
      <p> ${caminho.name}</p>
      <p> Tipo:${caminho.type}<br/>
       Candy:${caminho.candy}<br/>
       Altura:${caminho.height}<br/>
       Peso:${caminho.weight}<br/>
       Fraqueza:${caminho.weaknesses}<br/>
       Chance de captura:${caminho.spawn_chance}<br/>
       Evolução Anterior:${caminho.prev_evolution ? caminho.prev_evolution[0].name : "Não tem evolução"}<br/>
       Proxima Evolução:${caminho.next_evolution ? caminho.next_evolution[0].name : "Não tem evolução"}</p>
      </div>`
  let modal = document.getElementById("details");
  let span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  document.getElementById("modal1").innerHTML = box2;
  span.onclick = () => {
    modal.style.display = "none";
  }
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    (box2);
  }
}
//Limpa todos os campos
/* const limpaTudo = () => {
  document.getElementById("name-pokemon").value = "";
  document.getElementById("filter-type").value = "";
  document.getElementById("div-calc").innerHTML = "";
  document.getElementById("filter-weakness").value = "";
  document.getElementById("order-search").value = "";
} */
//Limpar Campos: Tipos, fraquezas e Ordem  *colocar na função nome
const limpaCamposTiposFraquezasOrdem = () => {
  document.getElementById("filter-type").value = "";
  document.getElementById("div-calc").innerHTML = "";
  document.getElementById("filter-weakness").value = "";
  document.getElementById("order-search").value = "";
}
//Limpar Campos: Nome, fraquezas e Ordem *colocar na função tipo 2
const limpaCamposNomeFraquezasOrdem = () => {
  document.getElementById("name-pokemon").value = "";
  document.getElementById("filter-weakness").value = "";
  document.getElementById("order-search").value = "";

}
//Limpar Campos: Nome,Tipos e Ordem *colocar na função fraqueza 3
const limpaCamposNomeTiposOrdem = () => {
  document.getElementById("name-pokemon").value = "";
  document.getElementById("filter-type").value = "";
  document.getElementById("div-calc").innerHTML = "";
  document.getElementById("order-search").value = "";
}

//Limpar Campos: Nome,tipo e fraqueza *colocar na função ordem 4
const limpaCamposNomeTiposFraquezas = () => {
  document.getElementById("name-pokemon").value = "";
  document.getElementById("filter-type").value = "";
  document.getElementById("div-calc").innerHTML = "";
  document.getElementById("filter-weakness").value = "";
}
//Nome
document.getElementById("name-pokemon").oninput = () => {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const pokesName = document.getElementById("name-pokemon").value;
  const pesquisado = selectName(data.pokemon, pokesName)
  criaImagemNoHtml(pesquisado)
  rodarModal()
  limpaCamposTiposFraquezasOrdem()
}
// função filtrar por tipo
document.getElementById("filter-type").onchange = () => {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const filterType = document.getElementById("filter-type").value;
  const filtrado = selectFilter(data.pokemon, filterType)
  criaImagemNoHtml(filtrado)
  rodarModal()
  limpaCamposNomeFraquezasOrdem()
  percent()
};
const percent = () => {
const filterType = document.getElementById("filter-type").value;
const result = porcentagem(data.pokemon,filterType)
  document.getElementById("div-calc").innerHTML = `Temos ${result} % de pokemons desse tipo .`
}
// função filtrar por fraquezas
document.getElementById("filter-weakness").onchange = () => {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const weakFilter = document.getElementById("filter-weakness").value;
  const pesquisado = selectWeak(data.pokemon, weakFilter)
  criaImagemNoHtml(pesquisado)
  rodarModal()
  limpaCamposNomeTiposOrdem()
}
// função filtrar por ordem
document.getElementById("order-search").onchange = () => {
  const htmlCards = document.getElementById("div-pokes")
  htmlCards.innerHTML = ""
  const searchOrder = document.getElementById("order-search").value;
  const ordenada = orderPokes(data.pokemon, searchOrder)
  criaImagemNoHtml(ordenada)
  rodarModal()
  limpaCamposNomeTiposFraquezas()
}