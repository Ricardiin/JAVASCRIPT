/**
 * Sorteio de uma carta
 * Exemplo de uso de array para otimizar o código
 * @author Ricardin
 */

function sortear() {
    let nipes = ["♥","♦","♣","♠"]
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    //apoio a lógica
    //console.log(faces[10])
    //console.log(nipes[3])

    //sorteio de uma carta
    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 13)]
    
    // Apoio a logica
    //console.clear()
    //console.log(nipe)
    //console.log(face)

    // Determinar a cor com base no nipe sorteado
    // cor vermelha #ff0000
    let cor
    if (nipe=== "♥" || nipe === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000"
    }

    //renderização do canto superior esquerdo da carta
    //.innerHTML insere uma tag no documento html
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    // Mudar a cor (o JS consegue também manipular o CSS)
    document.getElementById('supEsq').style.color = cor

    //renderização do centro da carta
    //document.getElementById('centrocarta').innerHTML = `<div>${nipe}</div>`
    let cc = document.getElementById('centrocarta')
    if (face === "J") {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (face === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (face === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
        cc.innerHTML = nipe
        cc.style.color = cor
    }

    //renderização do canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    //Mudar a cor
    document.getElementById('infDir').style.color = cor

}