/**
 * Estudo das funções
 * @author Ricardin
 */

// Função simples
function hello() {
    console.log("Hello function")
}

console.log(typeof(hello))
hello()

// Função anônima
// Podemos usar let ou const para criar uma função
// anônima, a vantagem de criar funções desta forma
// é armazenar o resultado da execução.
const hello2 = function () {
    console.log("Hello função anônima")
}

console.log(typeof(hello2))
hello2()

// Simplificação da função anônima (arrow function)
// function ()  simplificado para:  () =>
const hello3 = () => {
    console.log("Hello função anônima simplificada")
}

console.log(typeof(hello3))
hello3()

// Simplificação 2 da função anônima
// Neste caso só uma linha de codigo é processada
// Simplificação: _ e omissão de chaves
const hello4 = _=> console.log("Hello função simplificada 2")

console.log(typeof (hello4))
hello4()

// Função com parametros e retorno 
function somar(num1,num2) {
    return console.log(num1 + num2)
}

console.log(typeof(somar))
somar(5,55) //Soma dois valores atribuidos no "parênteses anteriores"

// Função anônima com parâmetros e retorno simplificada
const somarA = (num1,num2) => {
    return console.log(num1 + num2)
}

console.log(typeof (somar))
somarA(3,4)

// Função anônima com parâmetros e retorno simplificada 2
// Neste caso omitimos chave3s e o retoro é implicito
// CUIDADO !!! nÃO É UMA FUNÇÃO SIMPLES A DICA SÃO OS PARÂMETROS
const somarAS = (num1, num2) => console.log(num1 + num2)

console.log(typeof (somarAS))
somarAS(5,10)