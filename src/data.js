
export const selectName = (data, name) => {
  const pokemonName = name.toUpperCase();
  return data.filter(search => search.name.toUpperCase().includes(pokemonName))
}

export const selectFilter = (data,filterType) =>{
  return  data.filter (search => search.type.includes(filterType) )
}

export const selectWeak = (data,weakFilter) => {
    return data.filter(search => search.weaknesses.includes(weakFilter))
}


const orderAZ = (a, b) => (a["name"]).localeCompare(b["name"])
const orderZA = (a, b) => (a["name"]).localeCompare(b["name"])
const orderByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
const orderSpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
export function orderPokes(data, order) {
  switch (order) {
    case "size":
      return data.sort((a, b) => orderByHeight(a, b))
    case "order-spawn":
      return data.sort((a, b) => orderSpawnChance(a, b))
    case "order-az":
      return data.sort((a, b) => orderAZ(a, b))
    case "order-za":
      return data.sort((a, b) => orderZA(a, b)).reverse();
  }
}
