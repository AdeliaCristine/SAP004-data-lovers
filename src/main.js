import { example } from './data.js';

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

/*function backToTop(){
   //let reload = true
document.documentElement.scrollTop= 0; 
}*/

var scrollTop = function () {
   window.scrollTo(0, 0);
};
document.getElementById("btn-top").addEventListener("click", scrollTop);




function pokemonImage(numeroDoIdDoPersonagem) {
   const way = data.pokemon[numeroDoIdDoPersonagem];
   let box = `
      <div class="column pokemon" id="pokemon${way.id}" data-id="${way.id}" >
      <img src=${way.img}>
      <p class:"text">${way.name}</p>
      </div>
`;
   return box;
}
function criaImagemNoHtml() {
   let htmlCards = '';
   for (let i = 0; i < data.pokemon.length; i++) {

      htmlCards += pokemonImage(i)
   }
   document.getElementById("pokes").innerHTML += htmlCards;
}
criaImagemNoHtml();

function rodarModal(){
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
   //console.log(index);
   let box2 = `
      <div class="column" >
      <img src=${data.pokemon[index].img}>
      <p class:"text">${data.pokemon[index].name}</p>
      <p class:"text">Tipo:${data.pokemon[index].type}</p>
      <p class:"text">Candy:${data.pokemon[index].candy}</p>
      <p class:"text">Altura:${data.pokemon[index].height}</p>
      <p class:"text">Peso:${data.pokemon[index].weight}</p>
      <p class:"text">Fraqueza:${data.pokemon[index].weaknesses}</p>
      <p class:"text">Evolução Anterior:${data.pokemon[index].prev_evolution[0].name}</p>
      <p class:"text">Proxima evolução:${data.pokemon[index].next_evolution[0].name}</p>
      </div>`

   let modal = document.getElementById("myModal");
   let span = document.getElementsByClassName("close")[0];
   // When the user clicks the button, open the modal 
   modal.style.display = "block";
   document.getElementById("modal1").innerHTML = box2;
   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
      modal.style.display = "none";
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }

   //console.log(box2);

   return box2;
}

document.getElementById("search-text").addEventListener("click", clearSearch);
document.getElementById("filter-type").addEventListener("change", clearType);
document.getElementById("filter-weakness").addEventListener("change", clearWeakness);
document.getElementById("order-search").addEventListener("change", clearOrder);
document.getElementById("search-text").addEventListener("click", searchName);
document.getElementById("filter-type").addEventListener("change", filterType);
document.getElementById("filter-weakness").addEventListener("change", filterWea);
document.getElementById("order-search").addEventListener("change", orderSea);

function clearSearch(event) {
   event.preventDefault();
   document.getElementById("pokes").style.display = "none";
}
function clearType() {
   document.getElementById("pokes").style.display = "none";
}
function clearWeakness() {
   document.getElementById("pokes").style.display = "none";
}
function clearOrder() {
   document.getElementById("pokes").style.display = "none";
}

function searchName(event) {
   event.preventDefault();
   let PokemonName = document.getElementById("name-pokemon").value;
   function selectName(x) {
      const names = data.pokemon[x].name;
      function namesPokes(names) {
         return names == PokemonName;
      }
      if (names.includes(PokemonName)) {
         document.getElementById("filtered").innerHTML += `
      <div class="column pokemon" id="pokemon${data.pokemon.id}" data-id="${data.pokemon.id}">
      <img src=${data.pokemon[x].img}>
      <p class:"text">${data.pokemon[x].name}</p>
      </div>
      `;
      }

   }
   function nomeNoHtml() {
      let nameCards = '';
      for (let i = 0; i < data.pokemon.length; i++) {
         nameCards += selectName(i)
      }
   }
   document.getElementById("filtered").innerHTML = "";
   nomeNoHtml();
}






function filterType(x) {
   let filterType = document.getElementById("filter-type").value;
   function selectFilter(x) {
      const types = data.pokemon[x].type;
      if (types.includes(filterType)) {
         document.getElementById("filtered").innerHTML += `
      <div class="column pokemon" id="pokemon${data.pokemon[x].id}" data-id="${data.pokemon[x].id}">
      <img src=${data.pokemon[x].img}>
      <p class:"text">${data.pokemon[x].name}</p>
      </div>
      `;
      }
   }
   function tipoNoHtml() {
      let typeCards = '';
      for (let i = 0; i < data.pokemon.length; i++) {
         typeCards += selectFilter(i)
      }
   }
   document.getElementById("filtered").innerHTML = "";
   tipoNoHtml();
   rodarModal();
}


function filterWea() {
   let weakFilter = document.getElementById("filter-weakness").value;
   function selectWeak(x) {
      const weaknesses = data.pokemon[x].weaknesses;
      if (weaknesses.includes(weakFilter)) {
         document.getElementById("filtered").innerHTML += `
   <div class="column">
   <img src=${data.pokemon[x].img}>
   <p class:"text">${data.pokemon[x].name}</p>
   </div>
   `;
      }
   }
   function fraquezaNoHtml() {
      let weakCards = '';
      for (let i = 0; i < data.pokemon.length; i++) {
         weakCards += selectWeak(i)
      }
   }
   document.getElementById("filtered").innerHTML = "";
   fraquezaNoHtml();
}

function orderSea() {
   let searchOrder = document.getElementById("order-search").value;
   document.getElementById("filtered").innerHTML = `A ordem escolhida foi ${searchOrder}.`
}

/*function type () {   // get name   // get all data by name   // clear dom   // show data }*/



//console.log(example, data);