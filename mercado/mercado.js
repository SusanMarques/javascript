function valor(){
    var macas = Number(document.getElementById("macas").value);

    if (macas<12) {
        document.write(macas*1.30)

    }else{
        document.write(macas)
    }
}