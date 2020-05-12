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

describe ('O que acontece quando eu digito um nome da busca',() => {
  it ('se é uma funçao', () => {
    expect(typeof selectName).toBe('function')
  });
  it ('se eu digital um nome ele me retone o nome',() =>{
    expect (selectName('pikachu')).toBe('pikachu')
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


/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
}),


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */

