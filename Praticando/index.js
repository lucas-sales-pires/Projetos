
/*

class Pokemon {
    constructor(nome) {
        this.nome = nome;
        this.tipo = "";
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.velocidade = 0
        this.carregar()
    }
    async carregar() {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.nome}`);
        const data = await resposta.json();

        this.vida = data.stats[0].base_stat;
        this.tipo = data.types[0].type.name;
        this.ataque = data.stats[1].base_stat;
        this.defesa = data.stats[2].base_stat;
        this.velocidade = data.stats[5].base_stat;
    }
}

async function gerarPokemon() {
    const pikachu = new Pokemon("pikachu")
    await pikachu.carregar()
    console.log(pikachu)
}


gerarPokemon()





divs.forEach(e=>{
    e.innerText = "Ola"
})
divs.map((e)=>{
    e.innerHTML ="ola"
})
divs.every(e)


let lista = [-3,12,20,30]

let somar = (acumulador,elemento)=>acumulador+elemento

let maior = (n)=> n > 0

console.log(lista.reduce(somar))
console.log(lista.every(maior));
console.log(lista.some(maior))


function soma(...valores){
    let res = 0
    for(n of valores){
        res += n
    }
    return res
}
console.log(soma(1,2,5,4))


let f = new Function("valores","return valores*2")
console.log(f(2))

let objeto = Object.create(Array,{Nome:{
    value:"lucas"
}})

console.log(objeto.Nome)




fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((resposta) => resposta.json())
    .then((data) => {
        let pokemonNome = data.results.map((pokemon) => pokemon.name)
        pokemonNome.forEach((nome) => {
            let div = document.createElement("div")
            let body = document.querySelector("body")
            body.appendChild(div)


            fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
                .then((resposta) => resposta.json())
                .then((data) => {
                    div.innerHTML = `<p>${nome} <img src="${data.sprites.front_default}"></p>`
                })
        })
    })

class Pokemon{
    constructor(nome){
        this.nome = nome;
        this.imagem = "";
        this.tipo = "";
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.velocidade = 0;
        this.carregar();
    }
    async carregar(){
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.nome}`)
        const data = await resposta.json();
        this.imagem = data.sprites.front_default;
        this.tipo = data.types[0].type.name;
        this.vida = data.stats[0].base_stat;
        this.ataque = data.stats[1].base_stat;
        this.defesa = data.stats[2].base_stat;
        this.velocidade = data.stats[5].base_stat;
    }
}
async function carregarPokemon(){
    let pokemon = document.getElementById("pokemon").value
    let div = document.createElement("div")
    let body = document.querySelector("body")  
    const meuPokemon = new Pokemon(pokemon)
    await meuPokemon.carregar()
    body.appendChild(div)
    div.innerHTML += `<p>Velocidade: ${JSON.stringify(meuPokemon.ataque)}</p>`
    div.innerHTML += `<p>Defesa :${JSON.stringify(meuPokemon.defesa)}</p>`
    div.innerHTML += `<p>Tipo :${JSON.stringify(meuPokemon.tipo)}</p>`
    div.innerHTML += `<p>Vida${JSON.stringify(meuPokemon.vida)}</p>`
    div.innerHTML += `<p>${JSON.stringify(meuPokemon.velocidade)}</p>`
    div.innerHTML += `<p>${meuPokemon.nome} <img src = "${meuPokemon.imagem}"></p>`
  
}
*/

class Pokemon{
    constructor(nome){
        this.nome = nome;
        this.saude = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.ataqueEspecial = 0;
        this.defesaEspecial = 0;
        this.velocidade = 0;
        this.tipo = "";
        this.imagem  = "";
        this.carregar()
    }
    carregar(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.nome}`)
        .then(resposta => resposta.json())
        .then(data =>{
            this.imagem = data.sprites.front_default;
            this.saude = data.stats[0].base_stat;
            this.ataque = data.stats[1].base_stat;
            this.defesa = data.stats[2].base_stat;
            this.ataqueEspecial = data.stats[3].base_stat;
            this.defesaEspecial = data.stats[4].base_stat;
            this.velocidade = data.stats[5].base_stat;
            this.tipo = data.types[0].type.name;
            this.exibir();
        })
    }
    exibir(){
        let body = document.querySelector("body");
        let div = document.createElement("div");
        body.appendChild(div);
        div.innerHTML += `<p>${this.nome} <img src ="${this.imagem}"> </p>`;
        div.innerHTML += `<p>Saúde: ${this.saude} </p>`;
        div.innerHTML += `<p>Ataque: ${this.ataque} </p>`;
        div.innerHTML += `<p>Defesa: ${this.defesa} </p>`;
        div.innerHTML += `<p>Ataque Especial: ${this.ataqueEspecial} </p>`;
        div.innerHTML += `<p>Defesa Especial: ${this.defesaEspecial} </p>`;
        div.innerHTML += `<p>Velocidade: ${this.velocidade} </p>`;
        div.innerHTML += `<p>Tipo: ${this.tipo} </p>`;

    }
}

function carregarPokemon(){
    new Pokemon(document.getElementById("pokemon").value)
}
