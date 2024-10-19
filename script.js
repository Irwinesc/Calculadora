// Obtener una referencia al display una vez
const display = document.getElementById('display');

/**
 * Añade un valor al display de la calculadora.
 * @param {string} value - El valor a añadir.
 */
function appendToDisplay(value) {
    display.value += value;
}

/**
 * Limpia el display de la calculadora.
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Calcula el resultado de la expresión en el display.
 */
function calculateResult() {
    try {
        let expression = display.value;

        // Reemplazar las raíces de orden n: n√x o n√(x) por nthRoot(x, n)
        // Permitir números decimales en n y x
        expression = expression.replace(/(\d+\.?\d*)√\(([^)]+)\)/g, 'nthRoot($2, $1)');
        expression = expression.replace(/(\d+\.?\d*)√(\d+\.?\d*)/g, 'nthRoot($2, $1)');

        // Reemplazar las raíces cuadradas: √(x) o √x por nthRoot(x, 2)
        expression = expression.replace(/√\(([^)]+)\)/g, 'nthRoot($1, 2)');
        expression = expression.replace(/√(\d+\.?\d*)/g, 'nthRoot($1, 2)');

        // Reemplazar constantes y operadores
        expression = expression
            .replace(/π/g, 'pi')                 // Cambia π por pi
            .replace(/e/g, 'e')                   // No hay cambio necesario para e
            .replace(/(\d+\.?\d*)\^(\d+\.?\d*)/g, 'pow($1, $2)') // Cambia n^m por pow(n, m)
            .replace(/log\(/g, 'log10(')          // Cambiar log a log10 para base 10
            .replace(/ln\(/g, 'log(')             // Cambiar ln a log (logaritmo natural en math.js)
            .replace(/sin\(/g, 'sin(')            // Funciones trigonométricas
            .replace(/cos\(/g, 'cos(')
            .replace(/tan\(/g, 'tan(');

        // Manejar el factorial
        expression = expression.replace(/(\d+)!/g, 'factorial($1)');

        // Evaluar la expresión usando math.js
        let result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        console.error('Error en la expresión:', error); // Detalle del error en consola
        display.value = 'Error'; // Mostrar "Error" en la calculadora
    }
}

/**
 * Maneja los eventos de teclado para la calculadora.
 * @param {KeyboardEvent} event - El evento de teclado.
 */
function handleKeyboardInput(event) {
    const allowedKeys = '0123456789+-*/().^√πe%';

    if (allowedKeys.includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (event.key.toLowerCase() === 'c') {
        clearDisplay();
    }
}

// Añadir el listener para manejar entradas del teclado
document.addEventListener('keydown', handleKeyboardInput);

function getbyIdx(arr, idx) {
 if (idx>0 && idx in arr) {
  return "idx está en el array y es mayor de 0"
 } else {
    return 'idx es menor de 0'
 }
}
let resultado2 = getbyIdx([1,2], 1);
console.log(resultado2)

// let dia;

// dia = 6;
// if (dia === 7) {
//     dia = "sábado"
// } else if (dia === 6) {
//     dia = "viernes";
// } else if (dia === 5) {
//     dia = "jueves";
// } else if (dia === 4) {
//     dia = "miércoles";
// } else if (dia === 3) {
//     dia = "martes";
// } else if (dia === 2) {
//     dia = "lunes";
// } else if (dia === 1) {
//     dia = "domingo";
// } else {
//     dia = "sábado";
// }

// console.log(dia);

// --- Forma 2 -- //

// let dia;

// dia = 6;

// switch (dia) {
//     case 7: 
//         dia = "sábado";
//         break;
//     case 6:
//         dia = "viernes";
//         break;
//     case 5:
//         dia = "jueves";
//         break;
//     case 4:
//         dia = "miércoles";
//         break;
//     case 3:
//         dia = "martes";
//         break;
//     case 2:
//         dia = "lunes";
//         break;
//     case 1:
//         dia = "domingo";
//         break;
//     default:
//         dia = "sábado";
//         break;
// }

// console.log(dia);

const dias = {
    7: "sabado",
    6: "viernes",
    5: "jueves",
    4: "miércoles",
    3: "martes",
    2: "lunes",
    1: "domingo"
};

let dia = 6;
dia = dias[dia];
// dia = dias[dia] || "sábado";

console.log(dia);