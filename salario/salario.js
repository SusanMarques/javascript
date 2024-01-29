function caucularsalario() {

    var salariobruto = Number(document.getElementById("salariobruto").value);

    if (salariobruto <= 2112){
        var irpf  = 0 ;
    }else{
        if(salariobruto <= 2826.65){
             irpf = (7.5/ 100) * salariobruto;
        }else{
           if(salariobruto <= 3751.05){
                irpf= (15/100)*salariobruto;
           }else{
                if(salariobruto <= 4664.68){
                    irpf= (22.5/100)*salariobruto;
                }else{
                    irpf= (27.5/100)*salariobruto;
                }
           }
        }

    }



    if (salariobruto <= 1412){
        var inss=(7.5/ 100) * salariobruto;
    }else{
        if(salariobruto <= 2666.68){
            inss= (9/ 100) * salariobruto;
        }else{
            if(salariobruto <= 4000.03){
                inss= (12/ 100) * salariobruto;
            }else{
                inss= (14/ 100) * salariobruto;

            }
        }
    }

    var salarioliquido = (salariobruto - irpf) - inss;

    document.write("O seu salário liquido é "+salarioliquido);

}
