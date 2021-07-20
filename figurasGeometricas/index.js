console.log("Hello world");

function FNCuadrado(lado){
    
    console.group("Cuadrado");
    let ladoCuadrado = lado;
    
    console.log("Los lados del cuadrado miden "+ladoCuadrado+" cm");
    
    const perimetro = ladoCuadrado * 4;
    
    console.log("El perimetro del cuadrado es "+perimetro+" cm");
    
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    
    console.log("El area del cuadrado es "+areaCuadrado+" cm2");
    console.groupEnd();
    document.getElementById("areaCuadrado").innerHTML = "El area del cuadrado es "+ areaCuadrado;
    document.getElementById("perimetroCuadrado").innerHTML = "El perimetro del cuadrado es "+ perimetro;
}

function FNTriangulo(lado1, lado2, base){
    console.group("Triangulo");
    const lado1Triangulo = lado1;
    const lado2Triangulo = lado2;
    const baseTriangulo = base;
    const alturaTriangulo = Math.sqrt((lado1Triangulo*lado1Triangulo)+((baseTriangulo/2)*(baseTriangulo/2)));


    console.log("Los lados del triangulo miden "+lado1Triangulo+" cm"+" lado2 "+lado2Triangulo+" cm"+" base "+baseTriangulo+" cm");

    const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
    console.log("El perimetro del triangulo es "+ perimetroTriangulo+" cm");

    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log("El area del triangulo es "+ areaTriangulo+" cm2");


    console.groupEnd();
    document.getElementById("areaTriangulo").innerHTML = "El area del triangulo es "+ areaTriangulo;
    document.getElementById("perimetroTriangulo").innerHTML = "El perimetro del triangulo es "+ perimetroTriangulo;

}

function FNCirculo(radio){
    console.group("Circulo");

    //Radio
    const radioCirculo = radio;
    console.log("El radio del circulo es "+ radioCirculo+" cm");
    //Diametro
    const diametroCirculo = radioCirculo*2;
    console.log("El diametro del circulo es "+ diametroCirculo+" cm");
    //PI
    
    const PI = Math.PI;
    console.log("Este es PI "+PI);
    //Circunferencia
    
    const perimetroCirculo = diametroCirculo * PI;
    console.log("El perimetro del circulo es "+ perimetroCirculo+" cm");
    //Area
    
    const areaCirculo = (radioCirculo * radioCirculo)*PI;
    console.log("El area del circulo es "+ areaCirculo+" cm");
    console.groupEnd();

    document.getElementById("areaCirculo").innerHTML = "El area del Circulo es "+ areaCirculo;
    document.getElementById("perimetroCirculo").innerHTML = "El perimetro del Circulo es "+ perimetroCirculo;
}




function FNLlamaCuadrado(){
    let medidaCuadrado = document.getElementById("ladCuadrado").value;
    console.log(medidaCuadrado);
    if (medidaCuadrado != 0){
        FNCuadrado(medidaCuadrado);

    }else{
        alert("Por favor ingresa una medida para el lado del cuadrado");
    }
}

function FNLlamaTriangulo(){
    let lad1Tri = document.getElementById("lad1").value;
    let lad2Tri = document.getElementById("lad2").value;
    let baseTri = document.getElementById("basTri").value;
    
    if (lad1Tri != ""&&lad1Tri != 0){
        if(lad2Tri != ""&&lad2Tri != 0){
            if(baseTri != ""&&baseTri != 0){
                FNTriangulo(lad1Tri, lad2Tri, baseTri);
            }else{
                alert("Debes completar todos los campos");
            }
        }else{
            alert("Debes completar todos los campos");
        }
        

    }else{
        alert("Debes completar todos los campos");
    }
}

function FNLlamaCirculo(){
    let radCir = document.getElementById("radCirculo").value;
    console.log(radCir);
    if (radCir != 0 && radCir != ""){
        FNCirculo(radCir);

    }else{
        alert("Por favor ingresa una medida para el radio del circulo");
    }
}


