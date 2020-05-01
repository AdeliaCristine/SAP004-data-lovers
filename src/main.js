import { example } from './data.js';

import data from './data/pokemon/pokemon.js';




//Botão topo


window.onscroll = function () {
   scroll();
}

function scroll() {
   let btnTop = document.getElementById("btn-top")
   if (document.documentElement.scrollTop > 50) {
      btnTop.style.display = "block"
   } else {
      btnTop.style.display = "none"
   }
}

function backTotop(){
document.documentElement.scrollTop= 0;

}


   function pokemonImage(numeroDoIdDoPersonagem) {
      const  way = data.pokemon[numeroDoIdDoPersonagem];
      let box = `
      <div class="column">
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
   

   document.getElementById("search-text").addEventListener("click", clearSearch);
   document.getElementById("filter-type").addEventListener("change", clearType);
   document.getElementById("filter-weakness").addEventListener("change", clearWeakness);
   document.getElementById("order-search").addEventListener("change", clearOrder);
   document.getElementById("search-text").addEventListener("click", searchName);
   document.getElementById("filter-type").addEventListener("change", filterType);
   document.getElementById("filter-weakness").addEventListener("change", filterWea);
   document.getElementById("order-search").addEventListener("change", orderSea);

   document.getElementById("btn-top").addEventListener(click,backTotop);
   //document.getElementById("btn-top-all").addEventListener("click", vertodos);

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
   /*function vertodos(){
   document.getElementById("pokes").style.display="block"; 
   }*/

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
      <div class="column">
      <img src=${data.pokemon[x].img}>
      <p class:"text">Nome:${data.pokemon[x].name}</p>
      <p class:"text">Tipo:${data.pokemon[x].type}</p>
      <p class:"text">Candy:${data.pokemon[x].candy}</p>
      <p class:"text">Altura:${data.pokemon[x].height}</p>
      <p class:"text">Peso:${data.pokemon[x].weight}</p>
      <p class:"text">Fraqueza:${data.pokemon[x].weaknesses}</p>
      <p class:"text">Evolução Anterior:${data.pokemon[x].prev_evolution}</p>
      <p class:"text">Proxima evolução:${data.pokemon[x].next_evolution}</p>

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
      nomeNoHtml();
   }
      


   function filterType() {
      let filterType = document.getElementById("filter-type").value;

      function selectFilter(x) {
         const types = data.pokemon[x].type;
      function tipoDoTipo(types) {
            return types == filterType;
         }
        // console.log(types);
        // console.log(types == filterType);
        // console.log("teste", types.includes(filterType));

         if (types.includes(filterType)) {
            document.getElementById("filtered").innerHTML += `
      <div class="column">
      <img src=${data.pokemon[x].img}>
      <p class:"text">Nome:${data.pokemon[x].name}</p>
      <p class:"text">Tipo:${data.pokemon[x].type}</p>
      <p class:"text">Candy:${data.pokemon[x].candy}</p>
      <p class:"text">Altura:${data.pokemon[x].height}</p>
      <p class:"text">Peso:${data.pokemon[x].weight}</p>
      <p class:"text">Fraqueza:${data.pokemon[x].weaknesses}</p>
      <p class:"text">Evolução Anterior:${data.pokemon[x].prev_evolution}</p>
      <p class:"text">Proxima evolução:${data.pokemon[x].next_evolution}</p>

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
      tipoNoHtml();
   }

   function filterWea() {
      let weakFilter = document.getElementById("filter-weakness").value;
      function selectWeak(x) {
         const weaknesses = data.pokemon[x].weaknesses;
      function tipoDeFraque(weaknesses) {
         return weaknesses == weakFilter;
      }
      
      if (weaknesses.includes(weakFilter)) {
         document.getElementById("filtered").innerHTML += `
   <div class="column">
   <img src=${data.pokemon[x].img}>
   <p class:"text">Nome:${data.pokemon[x].name}</p>
   <p class:"text">Tipo:${data.pokemon[x].type}</p>
   <p class:"text">Candy:${data.pokemon[x].candy}</p>
   <p class:"text">Altura:${data.pokemon[x].height}</p>
   <p class:"text">Peso:${data.pokemon[x].weight}</p>
   <p class:"text">Fraqueza:${data.pokemon[x].weaknesses}</p>
   <p class:"text">Evolução Anterior:${data.pokemon[x].prev_evolution}</p>
   <p class:"text">Proxima evolução:${data.pokemon[x].next_evolution}</p>
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
   fraquezaNoHtml();
}

   function orderSea() {
      let searchOrder = document.getElementById("order-search").value;
      document.getElementById("filtered").innerHTML = `A ordem escolhida foi ${searchOrder}.`
   }




//console.log(example, data);