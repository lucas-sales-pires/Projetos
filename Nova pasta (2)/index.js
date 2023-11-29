/*let divs = [...document.getElementsByTagName("div")];

divs.forEach(e=>{
    e.innerText = "Ola"
})
divs.map((e)=>{
    e.innerHTML ="ola"
})
divs.every(e)
*/

let lista = [-3,12,20,30]

let somar = (acumulador,elemento)=>acumulador+elemento

let maior = (n)=> n > 0

console.log(lista.reduce(somar))
console.log(lista.every(maior));
console.log(lista.some(maior))

