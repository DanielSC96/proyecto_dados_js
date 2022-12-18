cambiarDados();


function cambiarDados(){
    let numero = parseInt((Math.random() * 6) + 1);
    let numero2 = parseInt((Math.random() * 6) + 1);
    let numero3 = parseInt((Math.random() * 6) + 1);
    let elemento = document.getElementById("dado1");
    let elemento1 = document.getElementById("dado2");
    let elemento2 = document.getElementById("dado3");
    let suma = numero+numero2+numero3;
    let sumatoria = document.getElementById("puntos");
    sumatoria.innerHTML = `Punteo: ${suma}`;

    let rutas = ["./img/lado1.png", "./img/lado2.png","./img/lado3.png","./img/lado4.png","./img/lado5.png","./img/lado6.png",]


    if(numero == 1){
        elemento.src = rutas [0];
    } else if (numero == 2) {
        elemento.src = rutas [1];
    }
     else if (numero == 3) {
        elemento.src = rutas [2];
    }
     else if (numero == 4) {
        elemento.src = rutas [3];
    }
     else if (numero == 5) {
        elemento.src = rutas [4];
    }
    else {
        elemento.src = rutas [5]
    }
    if(numero2 == 1){
        elemento1.src = rutas [0];
    } else if (numero2 == 2) {
         elemento1.src = rutas [1];
    }
     else if (numero2 == 3) {
        elemento1.src = rutas [2];
    }
     else if (numero2 == 4) {
        elemento1.src = rutas [3];
    }
     else if (numero2 == 5) {
        elemento1.src = rutas [4];
    }
    else {
        elemento1.src = rutas [5]
    }
    if(numero3 == 1){
        elemento2.src = rutas [0];
    } else if (numero3 == 2) {
         elemento2.src = rutas [1];
    }
     else if (numero3 == 3) {
        elemento2.src = rutas [2];
    }
     else if (numero3 == 4) {
        elemento2.src = rutas [3];
    }
     else if (numero3 == 5) {
        elemento2.src = rutas [4];
    }
    else {
        elemento2.src = rutas [5]
    }

    

}



function cambiarDistribucion(){
    let vertical = document.getElementById('caras');
    let horizontal = window.getComputedStyle(vertical);

    if(horizontal.flexDirection == 'row'){ 
        vertical.style.flexDirection = 'column';
    } else{
        vertical.style.flexDirection = 'row'
    }
    
}