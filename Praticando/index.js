// let notas = [5,7,6,4,9,1]


// const total = notas.reduce((a,b)=>a+b)


// console.log("R$"+total.toFixed(2).replace(".",","))

// let lista2 = [1,2,3]

// lista2.fill(2)
// console.log(lista2)

// const maiorQue40 = (valor)=>valor >40;

// let lista3 = [0,10,50]
// console.log(lista3.every(maiorQue40))

// console.log(lista3.some(maiorQue40))


// const multiplica = new Function('a','b','return a * b')

// console.log(multiplica(5,2))


// let lista = [10,20,30,40,50,60]
// let lista2 = []

// // lista.forEach(numero => {
// //    lista2.push(numero*2)
// // });
// // console.log(lista2)


// lista.map((numero) => lista2.push(numero*2))

// console.log(lista2)



// let resposta = "sim"


// if(resposta == "sim"){
//     console.log("ok")
// }else{
//     console.log("negativo")
// }


// console.log(resposta == "sim" ? "ok":"negativo")



// const produtos = [{
//     nome:"Notebook",
//     preco:2500,
//     marca:"Asus"
// },{
//     nome:"Tenis",
//     preco:2700,
//     marca:"nike"
// }
// ]

// let nomeProdutos = produtos.filter((lista) =>lista.preco > 2500).map((n)=>n.nome)
// console.log(nomeProdutos)

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

class Escola {
    constructor(nome) {
        this.nome = nome
        console.log("ola " + this.nome)
    }


}

const escola = new Escola("lucas")
module.exports = escola;

function rand({min = 0,max = 1000}){
    const random = Math.random() * (max - min) + min;
    return Math.floor(random)
}
const obj  = {min:50,max:300}
console.log(rand(obj))


const nums = [1,2,3,4,5,6,7,8,9,10]

externo: for(a in nums){
    for(l in nums){
        if(a == 3 && l == 4){
            break externo
            console.log(`${a} ${l}`)
        }
    }
}


const func1 = function(a,b){return a+b}
function func2 (a,b){return a+b}

const array = [function(a,b) {return a*b},func1,func2]

console.log(array[0](5,2))
console.log(array[1](5,2))
console.log(array[2](5,2))


function soma(){
    let soma = 0;
    for (i in arguments){
        soma += arguments[i]

    }
    return soma
}


function soma2(...parametros){
    let soma = 0
    for(i in parametros){
        soma += parametros[i]
    }
    return soma
}

console.log(soma2(1,2,3,4,5,6,7,8,9,10))

function Carro(marca,modelo){
    this.marca = marca;
    this.modelo = modelo
    this.velocidade = 0
    console.log(`Meu carro é ${this.marca} do modelo ${this.modelo}`)
}

Carro.prototype.acelerar = function (incremento){
    this.velocidade += incremento
    console.log("Meu carro está correndo a "+this.velocidade+ " km/h")
}
const ferrari = new Carro("chevrolet",2020)
ferrari.acelerar(20)
ferrari.acelerar(20)


const pessoa = { 
    nome: "Lucas",
    idade: 25,
    dizerNome(){
        console.log(`Oi meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const pessoa3 = pessoa.dizerNome.bind(pessoa)
pessoa3()

function chamar(){
    this.idade = 0
    setInterval(()=>  {
        this.idade++
        console.log(`${this.idade}`)
    }, 1000);
}
let chama = new chamar
chama.idade

const soma = function (a,b){
    return a+b
}
const resultado = function(a,b,operacao=soma){
    return operacao(a,b)
}
console.log(resultado(1,3))



function comprimento(nome){
    console.log(`ola ${nome}`)
}
function chama (callback){
    let nome = 'lucas'
    callback(nome)
}
chama(comprimento)

const carros = ["mercedes","ferrari","fusca"]

function balofrai(nome,indice){
    console.log(`indice: ${indice+1} Nome: ${nome} `)
}
carros.forEach(balofrai)

const notas = [7.5,8.5,9.3,7.0]
const notasBaixas = notas.filter((nota)=>nota <8)
console.log(notasBaixas)

function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidade = 0
    this.acelerar = function () {
        if (velocidade + delta <= velocidadeMaxima) {
            velocidade += delta
        } else {
            velocidade = velocidadeMaxima
        }
    }

    this.getVelocidade = function () {
        return velocidade
    }

}
const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidade())


function getPreco(moeda = "R$",imposto = 0){
    return `${moeda} ${this.preco * (1 - this.desc)*(1 + imposto)}`
}
let produto = {
    nome: "notebook",
    preco: 2500,
    desc:0.5,
    
}

console.log(getPreco.call(produto,"R$",0.1))
console.log(getPreco.apply(produto,["R$",0.1]))


function operacoes(a,b){
    let soma = a + b;
    let multiplicacao = a * b
    let subtracao = a - b
    let divisao = a / b
    return {soma,multiplicacao,subtracao,divisao}
}

console.log(operacoes(5,2))

function triangulo(a,b,c){
    if(a == b && b == c){
        console.log("Triangulo equilátero")
    }
    if(a == b && b!= c || a!= b && c != a){
        console.log("Triangulo isosceles")
    }
    else{
        console.log("Triangulo escaleno")
    }
}
triangulo(10,30,10)

function baseExpoente(base,expoente){
    return Math.pow(base,expoente)
}
console.log(baseExpoente(5,2))


function dividindo(dividendo,divisor){
    const resultado = divisor/dividendo
    const resto = divisor%dividendo
    return {resultado,resto}
}

console.log(dividindo(5,25))

const soma = 0.1 + 0.2

console.log("R$ "+soma.toFixed(2).replace(".",","))

function jurosSimples(capital,taxa= 0.5,tempo){
    const juros = capital*taxa*tempo 
    const total = juros+capital
    return "Juros de R$ "+ juros.toFixed(2).replace(".",",")+` Total de R$ ${total}`
}
console.log(jurosSimples(600,0.12,5))


function jurosCompostos(capital,juros,tempo){
    const montante = capital*(1+juros)**tempo
    return "R$ "+ montante.toFixed(2).replace(".",",");
}
console.log(jurosCompostos(2000,0.10,6))
*/

// function baskhara(a,b,c){
//     let delta = b**2 - 4*a*c

//     delta <0? console.log("delta negativo"):null

//     let x1 = (-b + Math.sqrt(delta)) / (2 * a)
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a)

//     return [x1,x2]

// }

// const resultado = baskhara(3, -5,12)
// function analisarPontuacoes(pontuacoes) {
//     const pontuacoesArray = pontuacoes.split(' ').map(Number);

//     let recorde = pontuacoesArray[0];
//     let piorJogo = 0;
//     let vezesRecordeBatido = 0;

//     for (let i = 1; i < pontuacoesArray.length; i++) {
//         if (pontuacoesArray[i] > recorde) {
//             recorde = pontuacoesArray[i];
//             vezesRecordeBatido++;
//         } else if (pontuacoesArray[i] < pontuacoesArray[piorJogo]) {
//             piorJogo = i;
//         }
//     }

//     return [vezesRecordeBatido, piorJogo + 1]; 
// }

// const pontuacoes = "30 40 20 10 50";
// const resultado = analisarPontuacoes(pontuacoes);

// console.log(`Pedro bateu o recorde ${resultado[0]} vezes e teve seu pior jogo no número ${resultado[1]}.`);

// function calcularNotas(nota) {
//     let notaAtual = nota
//     if (nota < 38) {
//         console.log("reprovado")
//         false
//     }
//     let diferenca = 5 - (nota % 5)
//     if (diferenca < 3) {
//         notaAtual = nota + diferenca    
//         console.log( notaAtual+ " Parabéns")

//     }


// }
// calcularNotas(38)

// function divisivelPor3(valor){
//     return valor % 3 == 0 ? true : false 
// }

// console.log(divisivelPor3(2))
// function anoBissexto(ano) {
//     console.log((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0));
// }

// anoBissexto(2020); 
// const data = new Date
// const hoje = data.getDay()+1

// function semanaValida(valor) {
//     switch (valor) {
//         case 1: {
//             console.log("Domingo: Fim de Semana")
//             break
//         }
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6: {
//             console.log("Dia útil")
//             break
//         }
//         case 7: {
//             console.log("Sabado: Fim de Semana")
//             break
//         }
//         default:{
//             console.log("Dia inválido")
//         }

//     }
// }

// semanaValida(hoje)

// function frutas(nomeFruta) {
//     switch (nomeFruta) {
//         case "maça": {
//             console.log("Não vendemos esta fruta aqui")
//             break
//         }
//         case "kiwi": {
//             console.log("Estamos com escassez de kiwis")
//             break
//         }
//         case "melancia":{
//             console.log("Aqui está, são 3 reais o quilo")
//             break
//         }
//         default:{
//             console.error("Fruta não encontrada");
//         }
//     }
// }

// frutas("melancia")


// class Pessoa{
//     constructor(nome,idade){
//         this.nome = nome ; 
//         this.idade = idade ;
//     }
//     falar(){
//         console.log(`Eu me chamo, ${this.nome}`)
//     }
// }
// class Funcionario extends Pessoa{
//     constructor(profissao,posicao,nome,idade){
//         super(nome,idade)
//         this.nome = nome
//         this.idade = idade
//         this.profissao = profissao
//         this.posicao = posicao

//     }
//     falarProfissao(){
//         console.log(this.profissao)
//     }
// }



// const pessoa1 = new Pessoa("Lucas",25)
// const funcionario1 = new Funcionario("Promotor de Vendas","Operacional","Lucas",25)
// funcionario1.falar()
// funcionario1.falarProfissao()


// const a = 1
// const b = 2
// const c = 3

// const obj1 = {batata:a,cenoura:b,lentilha:c}
// const obj2 = {a,b,c}
// console.log(obj1)
// console.log(obj2)

// const getSet = {
//     _valor: 1,
//     get valor(){return this._valor},
//     set valor(valor){this._valor = valor}
// }
// console.log(getSet.valor = 5)
// console.log(getSet.valor  = 8)

// const objeto = {
//     nome:"lucas",
//     idade: 25
// }
// console.log(Object.values(objeto))

// const pessoa = {
//     nome:"Lucas",
//     idade:25
// }
// Object.defineProperty(pessoa,"sobrenome",{enumerable:true,value:"sales",writable:true})
// console.log(pessoa)
// pessoa.sobrenome = "pires"

// delete pessoa.idade
// console.log(pessoa)

// const obj1 = {nome:"Lucas"}
// const obj2 = {sobrenome:"Sales"}
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)

// const avo = {nomeAvo:"Francisco"}
// const pai = {paiNome:"Eudes"}
// const filho = {nomeFilho:"Lucas"}
// Object.setPrototypeOf(pai,avo)
// Object.setPrototypeOf(filho,pai)

// const data = new Date()
// const dataAtual = data.getFullYear()
// const nascimento = 1998
// const idade = dataAtual - nascimento
// const pai = { nome: "José", idade: 50 }
// const filho = Object.create(pai,
//     {
//         nome:
//         {
//             value: "Lucas",
//             writable: false,
//         },
//         idade:{
//             value:idade,
//             writable:true
//         }
//     }

// )

// console.log(filho.nome)
// console.log(filho.idade)

// function meuObjeto(){}

// const obj1= new meuObjeto


// meuObjeto.prototype.nome = "Lucas"

// meuObjeto.prototype.falar = function(){
//     console.log(`Olá meu nome é ${this.nome}`)
// }


// obj1.falar()
// console.log(obj1.nome)
// obj1.nome = "jose"
// console.log(obj1.nome)


// function
// string 
// object 
//array
// são function e tem prototype

// let nome = "Lucas"

// String.prototype.reverse = function(){
//     return this.split("").reverse().join("")
// }
// console.log(nome.reverse())

// function Aula(nome,videoID){
//     this.nome = nome
//     this.videoID = videoID
// }
// function novo(f,...params){
//     const obj = {}
//     f.apply(obj,params)
//     return obj
// }
// const aula1 = novo(Aula,'Bem vindo',123)
// console.log(aula1)

// const obj = {a:1,b:2,c:3,soma(){return this.a+this.b+this.c}}
// console.log(JSON.stringify(obj))
// const obj2 = '{"a":1,"b":2,"c":3,"d":4}'
// console.log(JSON.parse(obj2))

// class Lancamento{
//     constructor(nome = "Genérico",valor = 0){
//         this.nome = nome;
//         this.valor = valor;
//     }
// }
// class CicloFinanceiro{
//     constructor(mes,ano){
//         this.mes = mes;
//         this.ano = ano;
//         this.lancamentos = []
//     }
//     addLancamentos(...lancamentos){
//         lancamentos.forEach(l=>{
//             this.lancamentos.push(l)
//         })
//     }
//     sumario(){
//         let valorConsolidado = 0
//         this.lancamentos.forEach(l => {
//             valorConsolidado += l.valor
//         })
//         return valorConsolidado
//     }
// }

// const luz = new Lancamento("Luz",300);
// const aluguel = new Lancamento("aluguel",600);

// const resultado = new CicloFinanceiro(5,2023);
// resultado.addLancamentos(luz,aluguel);

// console.log(resultado.sumario())

// class Avo{
//     constructor(sobrenome){
//         this.sobrenome = sobrenome;
//     }
// }
// class Pai extends Avo{
//     constructor(sobrenome,profissao ="Professor"){
//         super(sobrenome)        
//         this.profissao = profissao

//     }
// }
// class Filho extends Pai{
//     constructor(){
//         super("Pires")
//     }
// }
// const filho = new Filho()
// console.log(filho)
// const quaseArray = {0:'lucas',1:'jaquelino'}
// Object.defineProperty(quaseArray,"toString",{
//     value:function(){
//         return Object.values(this)
//     },enumerable:false
// })
// console.log(quaseArray[1])

// const alunos = ["carlos","jose","rogerio"]
// const vazio = ["lucas","diego"]

// Array.prototype.forEach2 = function (valor){
//     for(let i = 0 ; i< this.length; i++){
//         console.log(this[i],i,this)
//     }
// }
// alunos.forEach2(function(nome,indice){
//     console.log(indice+1,nome)
// })

// alunos.forEach((n,i,a)=>{
//     console.log(i,n,a)
// })

// Array.prototype.map2 = function (callback){
//     const array = []
//     for(let i = 0; i< this.length ; i++){
//         array.push(callback(this[i],i,this))
//     }
//     return array
// }

// const carrinho = [
//     '{"nome": "Borracha", "preco": 3.45}',
//     '{"nome": "Caderno", "preco": 13.90}',
//     '{"nome": "Kit de Lapis", "preco": 41.22}',
//     '{"nome": "Caneta", "preco": 7.50}'
// ]


// const paraObjeto = json => JSON.parse(json)
// const porPreco = produto => produto.preco
// const resultado = carrinho.map2(paraObjeto).map2(porPreco)
// console.log(resultado)

// const produtos = [
//     { nome: "notebook", preco: 2500, fragil: true },
//     { nome: "televisao", preco: 5500 ,fragil:true},
//     { nome: "copo de plastico",preco:10, fragil:true},
//     { nome: "microondas", preco : 500, fragil: false},
// ]
// console.log(produtos.filter(n => n.preco > 2000 && n.fragil == true))

// Array.prototype.filter2 = function(callback){
//     let lista = []
//     for(let i = 0; i< this.length; i++){
//         if(callback(this[i],i,this)){
//             lista.push(this[i])
//         }
//     }
//     return lista
// }

// const produtos = [
//     { nome: "notebook", preco: 2500, fragil: true },
//     { nome: "televisao", preco: 5500 ,fragil:true},
//     { nome: "copo de plastico",preco:10, fragil:true},
//     { nome: "microondas", preco : 500, fragil: false},
// ]
// console.log(produtos.filter2((n,i) => n.preco > 2400))

// const lista = [1,2,3,4,5,60]
// console.log(lista.reduce((n,j)=>n+j/lista.length).toFixed(0))

// const alunos = [
//     {nome: "João", nota: 7.3, bolsista: false},
//     {nome: "Maria", nota: 9.2, bolsista: true},
//     {nome: "Pedro", nota: 9.8, bolsista: false},
//     {nome: "Ana", nota: 8.7, bolsista: true}
// ]

// const todosBolsistas = (resultado,bolsista)=>resultado && bolsista
// console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// const algumBolsista = (resulta,bolsista)=> resulta == bolsista
// console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

// const turmas = [
//     {
//         alunos: [
//             { nome: "Deiverson",nota:8.0 },
//             { nome: "Jose",nota:9.0 },
//             { nome: "Carlos",nota: 10.0 }
//         ]
//     },
//     {
//         alunos: [
//             { nome: "Frederico",nota:5.0 },
//             { nome: "Joseilton",nota:4.0 },
//             { nome: "Josefino",nota: 7.5 }
//         ]
//     }
// ]

// console.log(turmas.map(n => n.alunos).flatMap(n => n).map(n=> n.nota))


