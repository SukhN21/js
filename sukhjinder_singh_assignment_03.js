'use strict'

// Answer 1
console.log('-- Answer 1 --');

let startingBalance = 500;

let balance = startingBalance; 
let yearsTo100k = 0;
let yearsTo1m = 0;

while (balance < 100000) {
    balance *= 2;
    yearsTo100k++;
}
console.log(`It takes ${yearsTo100k} years to reach $100,000.`);

balance = startingBalance;
while (balance < 1000000) {
    balance *= 2;
    yearsTo1m++;
}
console.log(`It takes ${yearsTo1m} years to reach $1,000,000.`);
console.log();

/*  In this solution, I am confused where the problem is, Please correct me
// Answer 2
console.log('-- Answer 2 --')

const numbers = [40, 17, 28, 31, 41, 12, 19, 27, 38, 40, 18, 22, 33, 11];

for (let i = 0; i < 7; i++);

for (let j = numbers.length - 1; j > 7; j--);

console.log(`${numbers[i]} + ${numbers[j]} = ${numbers[i] + numbers[j]}`);
console.log();
*/

// Answer 3
console.log('-- Answer 3 --');

let input = 'hi. my name is John. i am a programmer. what is your name?';

function capitalizedSentence(input) {
    let sentence = input.split('. ')

    for(let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join('. ')
}
let output = capitalizedSentence(input)
console.log(output);
console.log();


// Answer 4
console.log('-- answer 4 --');

function predictPopulation(startingPopulation, dailyIncreasePercent, numDays) {
    // Validation
    if (startingPopulation < 2) {
        console.log("Error: Starting population must be at least 2 organisms.");
        return;
    }
    if (dailyIncreasePercent < 0) {
        console.log("Error: Daily population increase cannot be negative.");
        return;
    }
    if (numDays < 1) {
        console.log("Error: The number of days must be at least 1.");
        return;
    }

    let population = startingPopulation;
    console.log(`Day 1: ${population.toFixed(2)} organisms`);

    for (let day = 2; day <= numDays; day++) {
        population += (population * dailyIncreasePercent / 100);
        console.log(`Day ${day}: ${population.toFixed(2)} organisms`);
    }
}

let startingPopulation = 2;
let dailyIncreasePercent = 50;
let numDays = 7;

predictPopulation(startingPopulation, dailyIncreasePercent, numDays);
console.log();


//Answer 5
console.log('-- Answer 5 --');

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4];
let array3 = [1, 2, 3, 5];
let array4 = [1, 2, 3];

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return `Arrays have different lengths: Array 1 has ${arr1.length} elements, and Array 2 has ${arr2.length} elements.`;
    } for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return `Mismatch found at index ${i}: Array 1 has ${arr1[i]}, but Array 2 has ${arr2[i]}.`;
        }
    } return "The arrays are identical.";
}

console.log(compareArrays(array1, array2));
console.log(compareArrays(array1, array3));
console.log(compareArrays(array1, array4));
