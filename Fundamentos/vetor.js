/**
 * Vetor (array)
 * @author Ricardin
 */

//                 [0]       [1]      [2]      [3]      [4]       [5]
let alunosEM1 = ["Victor", "Tania", "Pedro", "Maria", "Viviane", "Sirlei" ]
console.log(typeof(alunosEM1))

// Lendo o valor de um array
console.log(alunosEM1)
console.table(alunosEM1)
console.log(alunosEM1.length)  //exibe o tamanho do vetor
console.log(alunosEM1[3])

// Adicionando dados no array
// O push adiciona sempre no fim da lista
alunosEM1.push("Jorge")
console.table(alunosEM1)

// Modificando os dados de um vetor
alunosEM1[1] = "Tânia"
console.table(alunosEM1)

// Excluindo os dados e um vetor
// O comando delete exclui os dados sem alterar os indices
delete alunosEM1[1]
console.table(alunosEM1)

// Percorrendo um vetor
// Usamos um laço for para percorrer o indice e extrair os dados
let notas = [2, 5, 8, 7, 9, 4]
//console.log(notas.length)
for (let i = 0 ; i < notas.length; i++) {
    console.log(notas[i])
}
// Simplificação do laço for para percorrer um array
// for each
notas.forEach((notas) => {
    console.log(notas)
})
// in
for (let i in notas) {
    console.log(notas[i])
}