'use strict';

/*
  write a program that copies one instance of each number from a 2D array, adds it to a new (empty) 
  array, and prints the result. Use the provided 2D array
*/

const nums = [
    [11, 17, 12, 13],
    [14, 15, 16, 15],
    [18, 10, 12, 11],
    [17, 14, 19, 10]
];

const instances = [];
// flat() turns a multidimentional array into a one dimension array, and 
// return it
const numbers = nums.flat();

// use the 'for.of' with iterables (array-like stuff)
// use the 'for..in' with objects (like traditional objects)
for (let number of numbers) {
    if (!instances.includes(number)) {
        instances.push(number);
    }
}

instances.sort((a, b) => a - b);
console.log(instances.join(', '));
console.log();

/*
  Write a program that lists all anagrams found in an array of strings. Do not 
  show the string you used as a search word. Use the words below.

  'earth', 'hater', 'heart', 'herat', 'land', 'part', 'prat', 'pearl', 'power',
  'rapt', 'raptor', 'rathe', 'tarp', 'tradition', 'trap', 'tramp', 'tour'

  Requirement: use at least one function in your code.
*/

console.log();

const dictionary = [
    'earth', 'hater', 'heart', 'herat', 'land', 'part', 'prat', 'pearl', 'power',
    'rapt', 'raptor', 'rathe', 'tarp', 'tradition', 'trap', 'tramp', 'tour'
];

function genKey(word) {
    const chars = word.trim().split('').sort();   // Array of characters
    let Key = chars.join('');                     // String
    return Key;
}

function listAnagrams(input) {
    let searchKey = genKey(input);
    let keyword = '';
    const lists = [];

    for (let word of dictionary) {
        keyword = genKey(word);

        if (searchKey === keyword)
            lists.push(word);
    }

    if (lists.length > 1) {
        lists.splice(lists.indexOf(input), 1);
        console.log(lists.join(', '));
    } else {
        console.log('No Anagrams found');
    }
}

listAnagrams('tarp');
listAnagrams('saudade');


/*
  write a program that copies and prints all non-integer numbers from the following
  2D array

  [3, 4.7, 1.3, 5],
  [9, 5.8, 7, 3.9],
  [6, 2.5, 1, 2.4]
*/

const data = [
    [3, 4.7, 1.3, 5],
    [9, 5.8, 7, 3.9],
    [6, 2.5, 1, 2.4]
];

const callbackFn = num => !Number.isInteger(num);
const integers = data.flat().filter(callbackFn);
console.log(integers);

// num => num % 1 !== 0


/*
  write a program that checks if a string (use the example below) is a palindrome. 
  A palindrome is a word, phrase, or sequence that reads the same backward 
  as forward

  Your code must remove commas and white spaces before starting the comparison, asv well as 
  ignore the case of the letters

  'A man, a plan, a cat, a canal, Panama' -> 'amanaplanacatacanalpanama'
*/

// Function to 'clean' the string
// Function to reverse the 'clean' string

let input = 'A man, a plan, a cat, a canal, Panama';

let cleanInput =  input.replace(/\s+|,\s+/g, '').toLowerCase();
let reverseInput = cleanInput.split('').reverse().join('');
let result = cleanInput === reverseInput ? 'Palindrome' : 'Not a Palindrome';
console.log(result);


/*
  write a program that prints the length of the last word in a string. Your code 
  must use a function and consider the following examples:

  'Good morning'
  ' Hello, world '
  'Hi, my name   is John       Fox'
*/

let strOne = 'Good morning';
let strTwo = ' Hello, world ';
let strThree = 'Hi, my name   is John       Fox';

function findLastWord(input) {
    let phrase = input.trim();
    let lastWord = phrase.substring(phrase.lastIndexOf(' ') + 1);
    return lastWord;
}

console.log(`${findLastWord(strOne).length} characters`);
console.log(`${findLastWord(strTwo).length} characters`);
console.log(`${findLastWord(strThree).length} characters`);