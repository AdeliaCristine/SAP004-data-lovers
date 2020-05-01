function searchName(event) {
    event.preventDefault();
    let nomePokemon = document.getElementById("name-pokemon").value;
    function selectName(x) {
        const nomes = data.pokemon[x].name;
        function nomesPokes(nomes) {
            return nomess == nomePokemon;
        }
        if (nomes.includes(nomePokemon)) {
            document.getElementById("filtrado").innerHTML += `
    <div class="coluna">
    <img src=${data.pokemon[x].img}>
    <p class:"text">Nome:${data.pokemon[x].name}</p>
    <p class:"text">Tipo:${data.pokemon[x].type}</p>
    <p class:"text">Candy:${data.pokemon[x].candy}</p>
    <p class:"text">Altura:${data.pokemon[x].height}</p>
    <p class:"text">Peso:${data.pokemon[x].weight}</p>
    <p class:"text">Fraqueza:${data.pokemon[x].weaknesses}</p>
    <p class:"text">Evolução Anterior:${data.pokemon[x].prev_evolution}</p>
    <p class:"text">Proxima evolução:${data.pokemon[x].next_evolution}</p>

    </div>
    `;
        }

    }
    function nomeNoHtml() {
        let nomeCards = '';
        for (let i = 0; i < data.pokemon.length; i++) {
            nomeCards += selectName(i)
        }
    }
    nomeNoHtml();
}