console.log("Esta funcionando");

function FNDescuento(precio, descuento){
   let pre = precio;
   let des = descuento;

   totalPaga = (pre *(100-des))/100;
   document.getElementById("totPaga").innerHTML = "El total a pagar es "+ totalPaga;
}

function FNLlamaDescuento(){
    let precio = document.getElementById("price").value;
    //let descuento = document.getElementById("discount").value;
    
    let cupones = [10,15,20,25,30,50,70];
    let numAl = Math.ceil(Math.random()*cupones.length);
    let des = cupones[numAl];
    console.log(des);
    document.getElementById("discount").value = des;

    if(precio != 0 && precio != ""){
        if(des){
            FNDescuento(precio,des);
        }else{
            alert("Ingrese un valor valido para descuento")
        }
    }else{
        alert("Ingrese un precio valido para descuento")
    }
    
}