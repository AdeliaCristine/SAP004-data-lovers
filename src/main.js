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
<<<<<<< HEAD

/*function backToTop(){
   //let reload = false
document.documentElement.scrollTop= 0; 
}*/

=======
>>>>>>> 4f1e68cf42d40e71c93b8e9b9757f17b87e0599b
var scrollTop = function (evt) {
   evt.preventDefault();
   window.scrollTo(0, 0);
};
document.getElementById("btn-top").addEventListener("click", scrollTop);
<<<<<<< HEAD



=======
>>>>>>> 4f1e68cf42d40e71c93b8e9b9757f17b87e0599b
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
   document.getElementById("filtered").innerHTML += htmlCards; 
}
criaImagemNoHtml();
const pokemons = document.getElementsByClassName("pokemon");
function rodarModal(){
for (const pokemon of pokemons) {
   pokemon.addEventListener("click", function () {
      const id = pokemon.getAttribute("data-id");
      abrirModal(id - 1)
   });
}
}
rodarModal();
function abrirModal(index) {
   const caminho = data.pokemon[index]
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
//console.log(example, data);

