let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');

let previousNumber = '';
let currentNumber = '';
let currentOperator = '';

numbers.forEach((number) => number.addEventListener('click', (e) => {
    getNumber(e.target.textContent)
    display.textContent = currentNumber;
}));


operators.forEach((operator) => operator.addEventListener('click', (e) => {
    getOperator(e.target.textContent)
    display.textContent = currentOperator;

}))

equal.addEventListener('click', () => {
    if (currentNumber != '' && previousNumber != '') {
        operate();
        if (previousNumber.length <= 7) {
            display.textContent = previousNumber;
        }
        else {
            display.textContent = previousNumber.slice(0, 7) + '...';
        }
    }
})

clear.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
    display.textContent = currentNumber;
})

decimal.addEventListener('click', () => {
    getDecimal();
    display.textContent = currentNumber;
})
function getOperator(operator) {
    currentOperator = operator;
    previousNumber = currentNumber;
    currentNumber = '';
}

function getNumber(num) {
    if (currentNumber.length < 7) {
        currentNumber += num;
    }
}

function operate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    if (currentOperator == '+') {
        previousNumber += currentNumber;
    }
    else if (currentOperator == '-') {
        previousNumber -= currentNumber;
    }
    else if (currentOperator == 'x') {
        previousNumber *= currentNumber;
    }
    else {
        previousNumber /= currentNumber;
    }
    previousNumber = previousNumber.toString();
    currentNumber = currentNumber.toString();
}


function getDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
}