function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let expression = display.value
        .replace(/√([0-9.]+)/g, 'Math.sqrt($1)') // Reemplaza √n por Math.sqrt(n)
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/\^/g, '**') // Reemplaza ^ por ** para potencias
        .replace(/log\(([^)]+)\)/g, 'Math.log($1)'); // Para logaritmo natural
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}