function celparafah (){
    var celsius = document.getElementById("celsius").value;
    var resultado = ((9 / 5) * celsius) + 32;
    document.write("O resultado da temperatura de celsius para fahrenheit "+resultado);

}

function fahparacel (){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var resultadodois = 5 / 9 *(fahrenheit - 32);
    document.write("O resultado da temperatura de fahrenheit para celsius é "+resultadodois);

}

