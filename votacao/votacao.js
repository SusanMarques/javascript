function porcentagem(){
    var Eleitores = Number(document.getElementById("Eleitores").value);
    var VBRANCOS = Number(document.getElementById("VBRANCOS").value);
    var VNULOS = Number(document.getElementById("VNULOS").value);
    var VVALIDOS = Number(document.getElementById("VVALIDOS").value);

    if (Eleitores == (VBRANCOS+VNULOS+VVALIDOS)){

        document.write("A porcentagem de votos brancos é de:" + (VBRANCOS/Eleitores*100)+"%"+"  ");
        document.write("A porcentagem de votos nulos é de:"+ (VNULOS/Eleitores*100)+"%"+" ");
        document.write("A porcentagem de votos validos é de:" + (VVALIDOS/Eleitores*100)+"%"+" ");
    }else{
        document.write("Fraude na votação");
    }
    
}