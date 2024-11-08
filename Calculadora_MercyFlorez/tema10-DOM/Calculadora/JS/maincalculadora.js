let currentNumber = 0;
let result = 0;
let operation = null;

function setOperation(op) {
    const numberInput = document.getElementById('numberInput');
    currentNumber = parseFloat(numberInput.value);
    if (operation !== null) {
        calculateResult();
    } else {
        result = currentNumber;
    }
    operation = op;
    numberInput.value = '';
}

function calculateResult() {
    const numberInput = document.getElementById('numberInput');
    const desabilitado = document.getElementById('desabilitado');
    const newNumber = parseFloat(numberInput.value);

    if (operation === '+') {
        result += newNumber;
    } else if (operation === '-') {
        result -= newNumber;
    } else if (operation === '*') {
        result *= newNumber;
    } else if (operation === '/') {
        result /= newNumber;
    }

    desabilitado.value = result;
    numberInput.value = '';
    operation = null;
}

function clearDisplay() {
    const numberInput = document.getElementById('numberInput');
    const desabilitado = document.getElementById('desabilitado');
    
    numberInput.value = '';
    desabilitado.value = '';
    result = 0;
    operation = null;
}