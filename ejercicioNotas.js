

function calcularPromedio(){
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
    const nota5 = parseFloat(document.getElementById("nota5").value);

    const promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
        alert('Debes ingresar al menos 2 notas válidas.');
        return;
    }

    const resultado = promedio.toFixed(2);

    document.getElementById("resultadoPromedio").value=resultado;
}

window.addEventListener("load", function(){
    document.getElementById("btnCalcularPromedio").addEventListener("click", calcularPromedio);
   
});