const display = document.querySelector('.display');
const backspace = document.querySelector('.backspace');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');
const dot = document.querySelector('.dot');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const height = document.querySelector('.height');
const nine = document.querySelector('.nine');

let variable1;
let variable2;
let operator;
let result;

function operate(num1, num2, operator) {
    switch (operator) {
        case divide.addEventListener('click'):
            return result = num1 / num2;
            break;
        case multiply.addEventListener('click'):
            return result = num1 * num2;
            break;
        case add.addEventListener('click'):
            return result = num1 + num2;
            break;
        case subtract.addEventListener('click'):
            return result = num1 - num2;
            break;
    }
}