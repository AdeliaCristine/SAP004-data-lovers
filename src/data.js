// funções de exemplo

import pokemon from "./data/pokemon/pokemon.js";

export const example = () => {}

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
   let box2 = `
      <div class="column" >
      <img src=${pokemon.pokemon[index].img}>
      <p class:"text">${pokemon.pokemon[index].name}</p>
      <p class:"text">Tipo:${pokemon.pokemon[index].type}</p>
      <p class:"text">Candy:${pokemon.pokemon[index].candy}</p>
      <p class:"text">Altura:${pokemon.pokemon[index].height}</p>
      <p class:"text">Peso:${pokemon.pokemon[index].weight}</p>
      <p class:"text">Fraqueza:${pokemon.pokemon[index].weaknesses}</p>

      <p class:"text">Evolução Anterior:${pokemon.pokemon[index].prev_evolution}</p>
      <p class:"text">Proxima evolução:${pokemon.pokemon[index].next_evolution}</p>
      <p id = evolution></p>
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
document.getElementById("search-text").onclick = function() {searchName(event).preventDefault();};
  function searchName (){
  let pokesName = document.getElementById("name-pokemon").value;
  const pokemonName = pokesName.toUpperCase();
  function selectName(x) {
    let namesPokemon = pokemon.pokemon[x].name;
    const names = namesPokemon.toUpperCase();
    if (names.includes(pokemonName)) {
      document.getElementById("filtered").innerHTML += `
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
  document.getElementById("filtered").innerHTML = "";
  nomeNoHtml();
  rodarModal();
}


// função filtrar por tipo
document.getElementById("filter-type").onchange = function(){filterType()};
function filterType() {
  let filterType = document.getElementById("filter-type").value;
  function selectFilter(x) {
    const types = pokemon.pokemon[x].type;
      if (types.includes(filterType)) {
        document.getElementById("filtered").innerHTML += `
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
  document.getElementById("filtered").innerHTML = "";
  tipoNoHtml();
  rodarModal();
}

// função filtrar por fraqueza
document.getElementById("filter-weakness").onchange = function(){ filterWea()};
function filterWea(){
  let weakFilter = document.getElementById("filter-weakness").value;
  function selectWeak(x) {
    const weaknesses = pokemon.pokemon[x].weaknesses;
      if (weaknesses.includes(weakFilter)) {
        document.getElementById("filtered").innerHTML += `
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
  document.getElementById("filtered").innerHTML = "";
  fraquezaNoHtml();
  rodarModal();
}

//função ordenar
document.getElementById("order-search").onchange = function() {myFunction()};
function myFunction() {
  let searchOrder = document.getElementById("order-search").value;
  function selectOrder(x) {
    const ordemNames = pokemon.pokemon[x].name;
    const ordenando = ordemNames.toUpperCase(); 
    ordemNames.forEach(name => {
      
    });
    //for (const ordem of ordemNames) {
      console.log(ordem);
      console.log(ordemNames);
    //return ordenando.sort();  diz que não é uma função
     // if (ordem.includes(ordenando)) {
        document.getElementById("filtered").innerHTML += `
        <div class="column pokemon" id="pokemon${pokemon.pokemon[x].id}" data-id="${pokemon.pokemon[x].id}">
        <img src=${pokemon.pokemon[x].img}>
        <p class:"text">${pokemon.pokemon[x].name}</p>
        </div>
        `;
  }
    
  function ordemNoHtml() {
      let orderCards = '';
      for (let i = 0; i < pokemon.pokemon.length; i++) {
        orderCards += selectOrder(i)
      }
  }
  document.getElementById("filtered").innerHTML = "";

  ordemNoHtml();
}

/*let nomeDoPoke = pokemon.pokemon[0].name;
const nomeDoPokemon= nomeDoPoke.toUpperCase();*/
/*var stringArray = ['Blue', 'Humpback', 'Beluga'];
function compararNumeros(a, b) {
   return a - b;
}
 console.log('stringArray:', stringArray.join());
console.log('Ordenada:', stringArray.sort());*/
/*document.getElementById("order-search").onchange = function() {myFunction()};
function myFunction() {
  let searchOrder = document.getElementById("order-search").value;

    for (const letra of nomeDoPokemon) {
        console.log(letra);
        console.log(nomeDoPokemon);
    }*/
  // nomeDoPokemon.sort(function(a, b){return a-b});
   //function compararNumeros(a, b) {
   // return a - b
  //}
  //console.log('stringArray:', nomeDoPokemon.join());
  //console.log('Ordenada:', nomeDoPokemon.sort()); //forma de ordenar, não está funcionando
  //} 
  //compararNumeros();

 /* var mapped = nomeDoPokemon.map(function(el, i) {
    return { index: i, value: el };
  })
  mapped.sort(function(a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
  });
  var result = mapped.map(function(el){
    return list[el.index];
    
  });
  console.log(result);*/ //erro diz que nomeDo Pokemon.map ou .sort não é um função.



/*export const anotherExample = () => {
  return 'OMG';
};*/

