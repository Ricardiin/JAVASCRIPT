/**
 * Tutorial de JavaScript
 * Estudo de tipagem dnamica
 * @author Ricardin
 */

console.log("Strings >>>>>")
let nome = "Richard"
console.log(typeof (nome))
console.log(nome)
console.log(nome.replace("jose","ze"))
// concatenaçao (uniao)
console.log("Aluno: " + nome) //não usar desta forma
console.log(`Aluno: ${nome}`) // forma mais segura

console.log("Numeros >>>>>>>>>>>>>>")
let peso = 65
let altura = 1.65
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc
imc = peso / (altura + altura)
console.log(` IMC: ${imc.toFixed(2)}`)
//ATENÇÃO 
console.log(10 / 0 )
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)
console.log("3" * 2)
console.log("10" / 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)
console.log(" Booleanos >>>>>>>>>")
let led = false
typeof(led)
console.log("Comparadores especiais")
let x = 2
let y = "2"
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof x == y)
console.log(typeof x === y)
console.log("problemas no uso do var >>>>>>>>")
var media = 9
console.log(typeof(media))
console.log(media)
var media = 8
console.log(typeof(media))
console.log(media)