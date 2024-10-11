'use strict'

/*
  Write a program that checks if a given positive number is multiple of 3 or multiple of 7
*/


let number = 21

if (number > 0) {
    if (number % 3 === 0 || number % 7 === 0) {
        console.log('Number is multiple of 3 or 7');
    } else {
        console.log('Number is neither multiple of 3 nor 7');
    }
} else {
    console.log('Please, enter a positive number');
}


/*
  Write a program to calculate a student's average grade and display the lowest grade. Output the average grade as well

  const grades = [87, 92, 78, 93, 89, 96, 95];
  let total = 0;
*/

const grades = [87, 92, 78, 93, 89, 96, 95];
let total = 0;
let lowerGrade = grades[0];

for (let i = 0; i < grades.length; i++) {
    total += grades[i];

    if (grades[i] < lowerGrade) {
        lowerGrade = grades[i];
    }
}

console.log(`Average grade: ${total / grades.length}`);
console.log(`John's lowest grade: ${lowerGrade}`); 
console.log();

/*
  Write a program that prints the number of letters in your full name. Do not count white spaces. The output must be 
  'Your name has n letters'
*/

let fullName = 'Sukhjinder Singh';
const names = fullName.split(' ');        // let noSpaces = fullName.replace(/\s+/g, '');
let letters = names.join('').length;

console.log(`Your name has ${letters} letters`);    // ${noSpaces.length}