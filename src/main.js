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
   document.getElementById("filtered").innerHTML += htmlCards; // tirei o pokes e deixei o filtered não esquecer de mudar no html e css
}
criaImagemNoHtml();
const pokemons = document.getElementsByClassName("pokemon");
function rodarModal(){
//const pokemons = document.getElementsByClassName("pokemon");
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

      <p class:"text">Evolução Anterior:${data.pokemon[index].prev_evolution}</p>
      <p class:"text">Proxima evolução:${data.pokemon[index].next_evolution}</p>
      <p id = evolution></p>
      </div>`

      //const escolhido = Bulbasaur;
      /*var clicou = data.pokemon.prev_evolution;
      if (pokemons.includes(clicou)){ //var str = 'algum texto'; if(str.match(/texto/)){   alert('string encontrada'); }
      document.getElementById("evolution")=innerHTML= data.pokemon[index].prev_evolution[0].name

      //`<p class:"text">Evolução Anterior:${data.pokemon[index].prev_evolution[0].name}</p>`
      console.log(prev_evolution);
      console.log(escolhido);
      console.log(clicou);
   } 
   else if (clicou.includes(pokemons)){
      document.getElementById("evolution")=innerHTML= data.pokemon[index].next_evolution[0].name
     // `<p class:"text">Proxima evolução:${data.pokemon[index].next_evolution[0].name}</p>`

   }else {
      console.log ("não apresenta nada");
   }*/

   
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



//console.log(example, data);

