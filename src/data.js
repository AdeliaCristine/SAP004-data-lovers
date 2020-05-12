import pokemon from "./data/pokemon/pokemon.js";
//export const example = () => {}

const way = pokemon.pokemon
//Busca por Nome
export const selectName = (name) => {
  const pokemonName = name.toUpperCase();
  return way.filter(function (search) {
    return search.name.toUpperCase().includes(pokemonName) 
  });
  

}
/* export function selectName() {
  let pokesName = document.getElementById("name-pokemon").value;
  const pokemonName = pokesName.toUpperCase();
  return way.filter(function (search) {
    return search.name.toUpperCase().includes(pokemonName)
  });
} */
// Filtrar NOVO

export const selectFilter = (type) =>{
  let filterType = document.getElementById("filter-type").value;
  const tipo =  way.filter (search => search.type.includes(filterType) )
  /* let grama =tipo.length
  let total = way.length  */
  //let resulto = tipo.length/way.length 
  let result = Math.round((tipo.length/way.length) * 100)/100
/*   Math. round(decimal * 100) / 100 */
  document.getElementById("porcentagem").innerHTML=`Temos ${result} % de pokemons do tipo ${filterType}.`
  return tipo}


/* //saiba mais
let filterType = document.getElementById("filter-type").value;
let porcen = way.filter(item => item.type.includes("filterType"))
let grama =porcen.length
let total = way.length 
let result = grama/total
console.log(result) */ 
 

/* export function selectFilter() {
  let filterType = document.getElementById("filter-type").value;
  return way.filter(function (search) {
    return search.type.includes(filterType)
  });

} */
// função filtrar por fraqueza NOVA
export const selectWeak = () => {
  let weakFilter = document.getElementById("filter-weakness").value;
    return way.filter(search => search.weaknesses.includes(weakFilter))
}
/* 
export function selectWeak() {
  let weakFilter = document.getElementById("filter-weakness").value;
  return way.filter(function (search) { 
    return search.weaknesses.includes(weakFilter)

  });
} */
//função ordenar
let orderAZ = (a, b) => (a["name"]).localeCompare(b["name"])
let orderZA = (a, b) => (a["name"]).localeCompare(b["name"])
let orderByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
let orderSpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
export function orderPokes(order) {
  switch (order) {
    case "size":
      return way.sort((a, b) => orderByHeight(a, b))
     //break
    case "order-spawn":
      return way.sort((a, b) => orderSpawnChance(a, b))
     // break
    case "order-az":
      return way.sort((a, b) => orderAZ(a, b))
     // break
    case "order-za":
      return way.sort((a, b) => orderZA(a, b)).reverse();
  }
}



