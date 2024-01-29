function avaliar(){

    var totalVotantes = Number(document.getElementById("votantes").value);
    var brancos = Number(document.getElementById("brancos").value);
    var nulos = Number(document.getElementById("nulos").value);
    var validos = Number(document.getElementById("validos").value);


    if (totalVotantes == brancos + nulos + validos){
        var pBrancos = (brancos / totalVotantes) * 100;
        var pNulos = (nulos / totalVotantes) * 100;
        var pValidos = (validos / totalVotantes) * 100;

        document.getElementById("pBrancos").innerHTML = pBrancos+" % de votos em branco";
        document.getElementById("pNulos").innerHTML = pNulos+" % de votos em branco";
        document.getElementById("pValidos").innerHTML = pValidos+" % de votos em branco";


    }else{
        document.write ("FRAUDE");
    }

}

   