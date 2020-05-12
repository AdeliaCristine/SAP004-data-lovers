
//Busca por Nome
export function selectName(data,name) {
  const pokemonName = name.toUpperCase();
  return data.filter(function (search) {
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
export function selectFilter(data,filterType) {
    return data.filter(function (search) {
    return search.type.includes(filterType)
  });
}
/* export function selectFilter() {
  let filterType = document.getElementById("filter-type").value;
  return way.filter(function (search) {
    return search.type.includes(filterType)
  });

} */
// função filtrar por fraqueza NOVA
export function selectWeak(data,weakFilter) {
    return data.filter(function (search) {
    return search.weaknesses.includes(weakFilter)

  });
}
/* 
export function selectWeak() {
  let weakFilter = document.getElementById("filter-weakness").value;
  return way.filter(function (search) { 
    return search.weaknesses.includes(weakFilter)

  });
} */
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

