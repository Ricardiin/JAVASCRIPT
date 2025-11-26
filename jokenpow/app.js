/**
 * JoKenPow
 * @author Ricardin
 */

function jogar() {

    // Validação
    if (
        document.getElementById('pedra').checked === false &&
        document.getElementById('papel').checked === false &&
        document.getElementById('tesoura').checked === false
    ) {
        alert("Selecione uma opção");
        return;
    }

    // Jogada do PC
    let sorteio = Math.floor(Math.random() * 3);
    let pc = document.getElementById('pc');

    switch (sorteio) {
        case 0:
            pc.src = "./img/pcpedra.png";
            break;
        case 1:
            pc.src = "./img/pcpapel.png";
            break;
        case 2:
            pc.src = "./img/pctesoura.png";
            break;
    }

    // Jogada do usuário
    let jogador;
    if (document.getElementById('pedra').checked) jogador = 0;
    if (document.getElementById('papel').checked) jogador = 1;
    if (document.getElementById('tesoura').checked) jogador = 2;

    // Resultado
    let resultado = document.getElementById('resultado');

    if (jogador === sorteio) {
        resultado.innerText = "EMPATE";
    } else if (
        (jogador === 0 && sorteio === 2) || (jogador === 1 && sorteio === 0) || (jogador === 2 && sorteio === 1) 
    ) {
        resultado.innerText = "VOCÊ GANHOU!";
    } else {
        resultado.innerText = "COMPUTADOR VENCEU!";
    }
}

function resetar() {
    document.getElementById('pc').src = "./img/pc.png";
    document.getElementById('resultado').innerText = "";
    document.getElementById('pedra').checked =
    document.getElementById('papel').checked =
    document.getElementById('tesoura').checked = false;
}
