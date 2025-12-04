/**
 * Simples carrosel de imagens
 * @author ricardin
 */

let slidesCarrosel = ["slide1.jpg","slide2.jpg","slide3.jpg"]
let intervalo = 3000 //3000ms = 3s (efeito)
let indice = 0 //apoio a lógica

show () //executa uma vez

function show(){
    // função interna de intervalos
    setTimeout(() => {
        document.getElementById('slides').src =(`./img/${slidesCarrosel[indice]}`)
    }, 1000) // executa a cada 1s (em tempo real)
    setTimeout(show, intervalo) //executa a função a cada intervalo
}