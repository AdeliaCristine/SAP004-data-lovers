import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

//Botão topo

window.onscroll = function (){
   scroll();
}

function scroll(){
   let btnTop= document.getElementById("btn-top")
   if(document.documentElement.scrollTop>50){
      btnTop.style.display = "block"
   }else{
      btnTop.style.display= "none"
   }
   
}



function pokemonImage (numeroDoIdDoPersonagem){
const caminho = data.pokemon[numeroDoIdDoPersonagem];
let box =`
      <div class="coluna">
      <img src=${caminho.img}>
      <p class:"text">${caminho.name}</p>
      </div>
`;
return box; 
}
function criaImagemNoHtml(){
   let htmlCards='';
   for (let i = 0; i<data.pokemon.length; i++){
      
      htmlCards+=pokemonImage(i)
}
document.getElementById("pokes").innerHTML+= htmlCards;
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
//document.getElementById("btn-top-all").addEventListener("click", vertodos);

function clearSearch(event){
   event.preventDefault();
   document.getElementById("pokes").style.display="none"; 
}
function clearType(){
   document.getElementById("pokes").style.display="none"; 
}
function clearWeakness(){
   document.getElementById("pokes").style.display="none"; 
}
function clearOrder(){
   document.getElementById("pokes").style.display="none"; 
}
/*function vertodos(){
document.getElementById("pokes").style.display="block"; 
}*/

function searchName (event){
   event.preventDefault();
      let nomePokemon = document.getElementById("name-pokemon").value;
      //document.getElementById("filtrado").innerHTML= `O nome digitado foi ${nomePokemon}.`
      function agoravai2(){
         //var nomesPokes = [data.pokemon[x].name];
         function checkNames() {
            return nomePokemon == data.pokemon[0].name;
         }
      function myFunction() {
      document.getElementById("filtrado").innerHTML = data.pokemon[0].name.filter(checkNames);
      console.log(nomePokemon);
      console.log(data.pokemon[0].name.filter(checkNames));
      }
      }agoravai2();
   }
  

/*function filterItems(query) {
   return nomesPokes.filter(function(el) {
      return el.indexOf(query();
   })
}

console.log(filterItems('bu')); // ['apple', 'grapes']
console.log(filterItems('pi')); // ['banana', 'mango', 'orange']
}*/


/*function agoravai(x){
      const tipos = [data.pokemon[0].type];
      for(let tipo of tipos) {
         console.log(tipo);
         return tipo;
      }}*/

function filterType(){
   let tipofil = document.getElementById("filter-type").value;
   document.getElementById("filtrado").innerHTML= `O tipo escolhido foi ${tipofil}.`
   
   let isso = data.pokemon.filter((nomedeles) => {
      return nomedeles.type === 'dog';
    })
   function agoravai(x){
   
         const tipos = [data.pokemon[x].type[x]];
         for(let tipo of tipos) {
         
        // document.getElementById("filtrado").innerHTML+= tipo;
   
function tipodotipo(tipos) {
   return tipos == tipofil;

 }
 //var filtered = [data.pokemon[x].type].filter(tipodotipo);
   console.log(tipos);
   console.log(tipo);
   console.log(tipofil);
  
   if (tipo==tipofil || tipo||tipofil){
      document.getElementById("filtrado").innerHTML+= `
      <div class="coluna">
      <img src=${data.pokemon[x].img}>
      <p class:"text">${data.pokemon[x].name}</p>
      <p class:"text">${data.pokemon[x].type}</p>
      </div>
      `;
      //console.log(`Você escolheu o tipo ${tipofil}`);
   }else {
      console.log("Não temos pokemon desse tipo");
   }
  //console.log(filtered);
  //console.log(tipos = tipofil);
}
 
      }
      function tipoNoHtml(){
         let tipoCards='';
         for (let i = 0; i<data.pokemon.length; i++){
            tipoCards+=agoravai(i)
      } 
      //document.getElementById("filtrado").innerHTML+= tipoCards;
      //console.log(tipoCards);
      }
      tipoNoHtml();

      function tipocerto(pokemon) {
         return (data.pokemon[0].type=== tipofil)
      }
      tipocerto();
      console.log(Object.keys(tipocerto));
      //console.log(tipocerto);
      
   }
      /*data.pokemon[x].filter(tipocerto)
      filter()
      console.log(filter())
   }
   document.getElementById("filtrado").innerHTML= `O tipo escolhido foi ${filter()}.`


   document.getElementById("filtrado").innerHTML= `O tipo escolhido foi ${tipofil}.`
}
console.log(data.pokemon[0].type);*/

function filterWea(){
   let fraquesa = document.getElementById("filter-weakness").value;
   document.getElementById("filtrado").innerHTML= `A fraquesa escolhida foi ${fraquesa}.`
}
function orderSea(){
   let ordem = document.getElementById("order-search").value;
   document.getElementById("filtrado").innerHTML= `A ordem escolhida foi ${ordem}.`
}




//console.log(example, data);