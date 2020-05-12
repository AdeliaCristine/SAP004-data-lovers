import { selectName, selectFilter, selectWeak,orderPokes} from '../src/data.js';

  const pokemon = {
    pokemon:[
      {
        name: "pikachu",
        type:"Grass",
        weakness: "dragon",
      },
      {
        name:"Bulbasaur",
        type: "eletric",
        weakness : "fire",
      },
    ]}

  describe('Searching a pokemon by name', () => {
    it('should be a function', () => {
      expect(typeof selectName).toBe('function');
    });
  it ('se eu digital um nome ele me retone o nome',() =>{
    expect (selectName('pikachu')).toEqual('pikachu')
  });
}) 


describe ('filtrar o pokemon por tipo',() => {
  it ('se é uma funçao', () => {
    expect(typeof selectFilter).toBe('function')
  });
  it ('se eu digital um nome ele me retone o nome',() =>{
    expect (selectFilter(pokemon.pokemon,"type","Bulbasaur").toEqual([{type:"Bulbasaur"}]))
  });
})


describe ('filtrar o pokemon por fraqueza',() => {
  it ('se é uma funçao', () => {
    expect(typeof selectWeak).toBe('function')
  });
  it ('se eu digital um nome ele me retone o nome',() =>{
    expect (selectWeak('Grass')).toBe('dragon')
  });
})

describe('ordenar de az',() => {
  it ('se é em função',() => {
    expect (typeof orderPokes).toBe('function')
  });
})

/* 
const pokemonMock = {
  pokemon: [
    {
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }],
}]};
 */




/*   it('should return "Bulbasaur" when search the pokemon by name "bul"', () => {
    expect(selectName(pokemonMock.pokemon, "name", "Bulbassaur")).toEqual([{nome: 'Bulbasaur'}])
  });
}); */


/* // Teste filtrar por tipo
describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof selectFilter).toBe('function');
  });
}); */
/*
  it('should return "Glastly","Gengar","Haunter" for "Fantasma"', () => {
    expect(selectFilter("ghost")).toBe("Glastly","Gengar","Haunter");
  });
});*/

 /*  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });  */

// Teste filtrar por fraqueza
/* describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof selectWeak).toBe('function');
  });
}); */
/*
  it('should return "Dratini","Dragonite","Dragonair" for "Dragão"', () => {
    expect(selectWeak("dragon")).toBe('"Dratini","Dragonite","Dragonair"');
  });
});
*/

// Teste Ordenar

/* describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof orderPokes).toBe('function');
  });
});
 */
 /* it('should return "Bulbasaur" for "bul"', () => {
   expect(orderPokes("bul")).toBe('Bulbasaur');
  })
}); */
