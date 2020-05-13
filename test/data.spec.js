import { selectName, selectFilter, selectWeak, orderPokes } from '../src/data.js';

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
    ]
  },
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
    ]
  },
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

describe('Selecting a pokemon by name', () => {
  it('should be a function', () => {
    expect(typeof selectName).toBe('function');
  });
  it('should return "Bulbasaur" when search the pokemon by name "bul"', () => {
    const result = selectName(pokemonMock.pokemon, "bul")
    expect(result[0].name).toEqual("Bulbasaur")
  });
});


// Teste filtrar por tipo
describe('Selecting a pokemon by type', () => {
  it('should be a function', () => {
    expect(typeof selectFilter).toBe('function');
  });
  it('should return "Squirtle", for type "Water"', () => {
    const result = selectFilter(pokemonMock.pokemon,"Water","type")
    expect(result[0].name).toEqual("Squirtle")
  });
  
});

// Teste filtrar por fraqueza
describe('Selecting a pokemon by weakness', () => {
  it('should be a function', () => {
    expect(typeof selectWeak).toBe('function');
  });
  it('should return "Squirtle" for Electric"', () => {
    const result = selectWeak(pokemonMock.pokemon, "Electric")
    expect(result[0].name).toEqual("Squirtle")
  });
});

// Teste Ordenar

describe('Selecting a pokemon by order', () => {
  it('should be a function', () => {
    expect(typeof orderPokes).toBe('function');
  });
  it('should return "Bulbasaur", "Ivysaur" and "Squirtle" by "A-Z" order', () => {
    const result = orderPokes(pokemonMock.pokemon, "order-az")
expect(result).toEqual(pokemonMock.pokemon)
});
it('should return "Squirtle", "Ivysaur" and "Bulbasaur" by "Z-A" order', () => {
  const result = orderPokes(pokemonMock.pokemon, "order-za")
expect(result).toEqual(pokemonMock.pokemon)
});
it('should return "Squirtle", "Bulbasaur" and "Ivysaur" by "SIZE" order', () => {
  const result = orderPokes(pokemonMock.pokemon, "size")
expect(result).toEqual(pokemonMock.pokemon)
});
it('should return "Ivysaur","Squirtle" and "Bulbasaur"  by "ORDER-SPAWN" order', () => {
  const result = orderPokes(pokemonMock.pokemon, "order-spawn")
expect(result).toEqual(pokemonMock.pokemon)
});
})



