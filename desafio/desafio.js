var entradas = [];
var palavra = ["E","S","C","R","I","T","O","R","I","O"];


for (let i = 0; i < palavra.length; i++) {
    let entradaUsuario = prompt("Digite a letra: ");
    entradas.push(entradaUsuario);
    let letra = palavra[i];
    console.log(letra);
}

console.log("Entradas do usuário:", entradas);











