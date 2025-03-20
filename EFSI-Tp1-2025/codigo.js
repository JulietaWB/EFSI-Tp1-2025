const calcular = () => {
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    let resultado;
    const operacion= document.querySelector('input[name="operacion"]:checked');

    switch (operacion.value) {
        case 'op1': // Sumar
            resultado = num1 + num2;
            break;
        case 'op2': // Restar
            resultado = num1 - num2;
            break;
        case 'op3': // Multiplicar
            resultado = num1 * num2;
            break;
        case 'op4': // Dividir
            if (num2 === 0) {
                alert("No se puede dividir entre cero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default: 
            alert("Elige una operación.");
            break;
    }

    const rta = document.getElementById("rta");

    if (resultado>=0)
    {rta.style.color = 'green';}
    else {rta.style.color = 'red';}
    
    document.getElementById("rta").innerHTML=resultado;
}