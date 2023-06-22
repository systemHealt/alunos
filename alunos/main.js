var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");
var nota4 = document.getElementById("nota4");
var resultado = document.getElementById("resultado");
var calcular;


function fazerMedia(){
    nota1.value;
    nota2.value;
    nota3.value;
    nota4.value;

    calcular = (  parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value) + parseInt(nota4.value)) / 7;
    resultado.innerHTML = calcular;
}
