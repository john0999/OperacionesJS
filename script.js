function sumar() {
    try {
        let num1 = parseInt(document.getElementById("valor1").value);
        let num2 = parseInt(document.getElementById("valor2").value);

        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor rellena los campos e ingresa números válidos.');
            return;
        }

        let suma = num1 + num2;
        document.form.resultado.value = suma;
    } catch (error) {
        alert('ERROR DE CÓDIGO: ' + error);
        return;
    }
}

function restar() {
    try {
        let num1 = parseInt(document.getElementById("valor1").value);
        let num2 = parseInt(document.getElementById("valor2").value);

        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor rellena los campos e ingresa números válidos.');
            return;
        }

        let resta = num1 - num2;
        document.form.resultado.value = resta;
    } catch (error) {
        alert('ERROR DE CÓDIGO: ' + error);
        return;
    }
}

function multiplicar() {
    try {
        let num1 = parseInt(document.getElementById("valor1").value);
        let num2 = parseInt(document.getElementById("valor2").value);

        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor rellena los campos e ingresa números válidos.');
            return;
        }

        let multiplicacion = num1 * num2;
        document.form.resultado.value = multiplicacion;
    } catch (error) {
        alert('ERROR DE CÓDIGO: ' + error);
        return;
    }
}

function dividir() {
    try {
        let num1 = parseInt(document.getElementById("valor1").value);
        let num2 = parseInt(document.getElementById("valor2").value);

        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor rellena los campos e ingresa números válidos.');
            return;
        }

        let division = num1 / num2;
        document.form.resultado.value = division;
    } catch (error) {
        alert('ERROR DE CÓDIGO: ' + error);
        return;
    }
}