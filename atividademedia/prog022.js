var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]
];
var medias = [];
var soma = [];
var nomes = [];

//função para pegue o numero de notas 1

function quantidadeDeNotas(notas){
    return notas.length -1;
}

var exibirQuantidadeDeNotas = quantidadeDeNotas(notas);
console.log("número de notas do aluno: "+exibirQuantidadeDeNotas);

//função para calcular a soma das notas 2

soma = 0;
function caucularsoma(soma){

    for (i= 1 ; i < notas.length; i++){
        soma = soma + Number(notas[i]);
    }
return soma;

}
var exibirsoma = caucularsoma(notas);
console.log("soma é "+exibirsoma);


//função para calcule a média 3 = 2/1