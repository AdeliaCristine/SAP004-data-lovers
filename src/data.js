import pokemon from "./data/pokemon/pokemon.js";
//export const example = () => {}

const way = pokemon.pokemon
//Busca por Nome
export function selectName(search) {
  let pokesName = document.getElementById("name-pokemon").value;
  const pokemonName = pokesName.toUpperCase();
  return way.filter(function (search) {
    return search.name.toUpperCase().includes(pokemonName)
  });
}
// Filtrar NOVO
export function selectFilter(search) {
  let filterType = document.getElementById("filter-type").value;
  return way.filter(function (search) {
    return search.type.includes(filterType)
  });

}
// função filtrar por fraqueza NOVA
export function selectWeak(search) {
  let weakFilter = document.getElementById("filter-weakness").value;
  return way.filter(function (search) { 
    return search.weaknesses.includes(weakFilter)

  });
}
//função ordenar
let orderAZ = (a, b) => (a["name"]).localeCompare(b["name"])
let orderByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
let orderSpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
export function orderPokes(order) {
  switch (order) {
    case "size":
      return way.sort((a, b) => orderByHeight(a, b))
      break
    case "order-spawn":
      return way.sort((a, b) => orderSpawnChance(a, b))
      break
    case "order-az":
      return way.sort((a, b) => orderAZ(a, b))
      break
 }
}
//saiba mais
let tipos = way.type
console.log(tipos)
let porcen = way.filter(item => item.type.includes("Grass"))
let grama =porcen.length
let total = way.length
let result = grama/total
document.getElementById("info").innerHTML = `Os pokemons tipo Grama representam ${result} %`

/* function myFunction() {
  let total = way.length
 document.getElementById("info").innerHTML = way.length
 if (total.includes(Grass.length)){
  console.log(Grass.length)
 }
} myFunction() */