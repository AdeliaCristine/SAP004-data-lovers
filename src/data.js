
//Busca por Nome
export function selectName(data,name) {
  const pokemonName = name.toUpperCase();
  return data.filter(function (search) {
    return search.name.toUpperCase().includes(pokemonName)


  });

}
// Filtrar NOVO
export function selectFilter(data,filterType) {
    return data.filter(function (search) {
    return search.type.includes(filterType)
  });

}
// função filtrar por fraqueza NOVA
export function selectWeak(data,weakFilter) {
    return data.filter(function (search) {
    return search.weaknesses.includes(weakFilter)

  });
}
//função ordenar
const orderAZ = (a, b) => (a["name"]).localeCompare(b["name"])
const orderZA = (a, b) => (a["name"]).localeCompare(b["name"])
const orderByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
const orderSpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
export function orderPokes(data, order) {
  switch (order) {
    case "size":
      return data.sort((a, b) => orderByHeight(a, b))
      //break
    case "order-spawn":
      return data.sort((a, b) => orderSpawnChance(a, b))
      // break
    case "order-az":
      return data.sort((a, b) => orderAZ(a, b))
      // break
    case "order-za":
      return data.sort((a, b) => orderZA(a, b)).reverse();
  }
}

/*

//saiba mais
let tipos = data.type
console.log(tipos)
let porcen = data.filter(item => item.type.includes("Grass"))
let grama =porcen.length
let total = data.length
let result = grama/total
console.log(result)
//document.getElementById("info").innerHTML = `Os pokemons tipo Grama representam ${result} %`

/* function myFunction() {
  let total = data.length
 document.getElementById("info").innerHTML = data.length
 if (total.includes(Grass.length)){
  console.log(Grass.length)
 }
} myFunction() */
