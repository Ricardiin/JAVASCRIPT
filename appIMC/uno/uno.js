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

    //renderização do canto superior esquerdo da carta
    //.innerHTML insere uma tag no documento html
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`

    //renderização do centro da carta
    document.getElementById('centrocarta').innerHTML = `<div>${nipe}</div>`

    //renderização do canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`

}