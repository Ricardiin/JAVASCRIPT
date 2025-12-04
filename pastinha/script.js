/**
 * clash royale
 * @author ricardin
 */

let cartas = [
  { nome: "Mago", elixir: 4, imagem: "img/mago.png" },
  { nome: "Príncipe", elixir: 5, imagem: "img/principe.png" },
  { nome: "Gigante", elixir: 6, imagem: "img/gigante.png" },
  { nome: "P.E.K.K.A", elixir: 8, imagem: "img/pekka.png" }
];

function sortear() {
  let sorteio = Math.floor(Math.random() * cartas.length);
  let cartaSorteada = cartas[sorteio];

  //atualiza a carta na tela
  document.getElementById("nomeCarta").innerText = cartaSorteada.nome;
  document.getElementById("elixir").innerText = cartaSorteada.elixir;
  document.getElementById("imagemCarta").src = cartaSorteada.imagem;

  //mostra qual foi a carta sorteada
  let resultado = document.getElementById("resultado");
  resultado.innerText = "✅ Carta sorteada: " + cartaSorteada.nome;
}
