/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let number1 = parseFloat(document.querySelector('#add1').value);
    let number2 = parseFloat(document.querySelector('#add2').value);
    document.getElementById('sum').value = add(number1, number2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}
function subtractNumbers() {
    const number1 = parseFloat(document.querySelector('#subtract1').value);
    const number2 = parseFloat(document.querySelector('#subtract2').value);
    document.getElementById('difference').value = subtract(number1, number2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    const factor1 = parseFloat(document.querySelector('#factor1').value);
    const factor2 = parseFloat(document.querySelector('#factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    const dividend = parseFloat(document.querySelector('#dividend').value);
    const divisor = parseFloat(document.querySelector('#divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', calculateTotalDue);

function calculateTotalDue() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;
    const discount = isMember ? 0.2 : 0;
    const totalDue = subtotal * (1 - discount);
    document.getElementById('total').innerText = `$${totalDue.toFixed(2)}`; 
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({length: 13 }, (_, index) => index + 1);
document.getElementById('array').innerText = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').innerText = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 == 0);
document.getElementById('evens').innerText = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').innerText = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').innerText = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const multipliedArray2 = numbersArray.map(number => number * 2);
const sumOfMultiplied = multipliedArray2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').innerText = sumOfMultiplied;
