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
      const caminho = data.pokemon[numeroDoIdDoPersonagem];
      let box = `
      <div class="coluna">
      <img src=${caminho.img}>
      <p class:"text">${caminho.name}</p>
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

   document.getElementById("test-pesq").addEventListener("click", clearSearch);
   document.getElementById("filter-type").addEventListener("change", clearType);
   document.getElementById("filter-weakness").addEventListener("change", clearWeakness);
   document.getElementById("order-search").addEventListener("change", clearOrder);
   document.getElementById("test-pesq").addEventListener("click", searchName);
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
      let nomePokemon = document.getElementById("name-pokemon").value;
      function selectName(x) {
         const nomes = data.pokemon[x].name;
      function nomesPokes(nomes) {
            return nomess == nomePokemon;
         }
         if (nomes.includes(nomePokemon)) {
            document.getElementById("filtrado").innerHTML += `
      <div class="coluna">
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
         let nomeCards = '';
         for (let i = 0; i < data.pokemon.length; i++) {
            nomeCards += selectName(i)
         }
      }
      nomeNoHtml();
   }
      


   function filterType() {
      let tipofil = document.getElementById("filter-type").value;

      function selectFilter(x) {
         const tipos = data.pokemon[x].type;
      function tipoDoTipo(tipos) {
            return tipos == tipofil;
         }
         console.log(tipos);
         console.log(tipos == tipofil);
         console.log("teste", tipos.includes(tipofil));

         if (tipos.includes(tipofil)) {
            document.getElementById("filtrado").innerHTML += `
      <div class="coluna">
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
         let tipoCards = '';
         for (let i = 0; i < data.pokemon.length; i++) {
            tipoCards += selectFilter(i)
         }
      }
      tipoNoHtml();
   }

   function filterWea() {
      let fraquezaFil = document.getElementById("filter-weakness").value;
      function selectWeak(x) {
         const fraquezas = data.pokemon[x].weaknesses;
      function tipoDeFraque(fraquezas) {
         return fuaquezas == fraquezaFil;
      }
      
      if (fraquezas.includes(fraquezaFil)) {
         document.getElementById("filtrado").innerHTML += `
   <div class="coluna">
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
      let fraquezaCards = '';
      for (let i = 0; i < data.pokemon.length; i++) {
         fraquezaCards += selectWeak(i)
      }
   }
   fraquezaNoHtml();
}

   function orderSea() {
      let ordem = document.getElementById("order-search").value;
      document.getElementById("filtrado").innerHTML = `A ordem escolhida foi ${ordem}.`
   }




//console.log(example, data);