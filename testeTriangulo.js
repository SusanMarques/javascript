function analisalados(){
    var lado1 = Number(document.getElementById("lado1").value);
    var lado2 = Number(document.getElementById("lado2").value);
    var lado3 = Number(document.getElementById("lado3").value);

    if ((lado1+lado2>lado3) && (lado2+lado3>lado1) &&(lado1+lado3>lado2)){
        if((lado1==lado2)&& (lado2==lado3)){
            document.write("é um triangulo equilatero");
        }else {
            if((lado1!=lado2)&&(lado1!=lado3)&&(lado2!=lado3)){
            document.write("é um triangulo é escaleno");
            }else{
            document.write("é um triangulo é isoceles");
            }
        }
    }else{
        document.write("Não é um triângulo");
    }
}