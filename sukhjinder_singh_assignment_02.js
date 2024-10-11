'use strict'

// Answer 1
console.log('--Answer 1--')

let share = 300
let pricePerShare = 21.75
let comissionTax = 0.02

// (a)
let totalAmount = share * pricePerShare 
let A = totalAmount
console.log(`Total Amount = $ ${A}`);
console.log();

// (b)
let amountOFComission = comissionTax * A
let B = amountOFComission
console.log(`Amount of comission = $ ${B}`);
console.log();

// (c)
let totalAmountExcludingComission = A + B
let C = totalAmountExcludingComission
console.log(`Total amount(excluding comission) = $ ${C}`) 
console.log();


// Answer 2
console.log('--Answer 2--');

let celsius = 23.0;
let fahrenheit = 73.4;

function celsiusToFahrenheit (celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(1);
}

function fahrenheitToCelsius (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius.toFixed(1); 
}

console.log(`${celsius} Celsius is ${celsiusToFahrenheit (celsius)} Fahrenheit`);
console.log(`${fahrenheit} Fahrenheit is ${fahrenheitToCelsius (fahrenheit)} Celsius`);
console.log();


// Answer 3
console.log('--Answer 3--')

// Largest Value
let a = 3, b = 7, c = 12;
let largest = Math.max (a, b, c);
console.log(`Largest value = ${largest}`);
console.log();


// Answer 4
console.log('--Answer--')
let grades = ['A', 'B', 'C', 'D', 'F'];

for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    switch(grade) {
        case 'A':
            console.log('Well done');
            break;
        case 'B':
            console.log('That\'s fine');
            break;
        case 'C':
            console.log('You passed, but we are not happy');
            break;
        case 'D':
            console.log('Bye-bye course');
            break;
        case 'F':
            console.log('Rest in peace');
            break;
        default:
            console.log('Invalid grade');
    }
}
console.log();


// Answer 5
console.log('--Answer 5--')

// All odd numbers from 1 to 50 (one per line)
for (let i = 1; i < 50; i++) {
    if (i % 2 !=0) {
        console.log(i)
    }  
}