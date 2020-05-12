import {
  selectName, selectFilter, selectWeak} from '../src/data.js';

const pokemonMock = {
  pokemon: [{
    "name": "Bulbasaur",
    "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
    "spawn_chance": 0.69,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ]},  
{
  "name": "Ivysaur",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "spawn_chance": 0.042,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ]},
  {
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "height": "0.51 m",
    "spawn_chance": 0.58,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
}]
};



// Teste busca por Nome
describe('Searching a pokemon by name', () => {
  it('should be a function', () => {
    expect(typeof selectName).toBe('function');
  });

  it('should return "Bulbasaur" when search the pokemon by name "bul"', () => {
    const result = selectName(pokemonMock.pokemon,"bul")
    expect(result[0].name).toEqual("Bulbasaur")
  });
});


// Teste filtrar por tipo
describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof selectFilter).toBe('function');
  });
});
/*
  it('should return "Squirtle", for type "Water"', () => {
    expect(selectFilter(pokemonMock.pokemon, "type", "Water")..toEqual([{nome: "Squirtle"}])
  });
});*/

// Teste filtrar por fraqueza
describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof selectWeak).toBe('function');
  });
});
/*
  it('should return "Squirtle" for Electric"', () => {
         expect(selectWeak(pokemonMock.pokemon, "weaknesses", "Electric")..toEqual([{nome: "Squirtle"}])
  });
});
*/

// Teste Ordenar
/*
describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof orderPokes).toBe('function');
  })
});

  it('should return "Bulbasaur", "Ivysaur" and "Squirtle" by "A-Z" order, () => {
   //expect(orderPokes.orderAZ (pokemonMock.pokemon, "name")..toEqual([{"Bulbasaur", "Ivysaur" and "Squirtle}]
expect(orderPokes(pokemonMock.pokemon, "order")..toEqual([{"Bulbasaur", "Ivysaur" and "Squirtle}]

 
  })
}); */



 