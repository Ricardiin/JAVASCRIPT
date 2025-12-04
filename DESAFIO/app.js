function sortear() {

    //calcula o valor do elixir entre esses 4 numeros
    let elixires = ["3", "4", "5", "6", "8"]

    //sorteia as quatro card
    let elixir = elixires[Math.floor(Math.random() * 5)]

    //cor
    let cor = "#9D00FF"

    //canto superior
    document.getElementById('supEsq').innerHTML = `<div>${elixir}</div>`
    document.getElementById('supEsq').style.color = cor

    //imagem do centro..
    let cc = document.getElementById('centrocarta')

    if (elixir === '3') {
        cc.innerHTML = `<img src="./img/3.png">`
    } else if (elixir === '4') {
        cc.innerHTML = `<img src="./img/4.png">`
    } else if (elixir === '5') {
        cc.innerHTML = `<img src="./img/5.png">`
    } else if (elixir === '6') {
        cc.innerHTML = `<img src="./img/6.png">`
    } else if (elixir === '8') {
        cc.innerHTML = `<img src="./img/8.png">`
    }

    cc.style.color = cor
}