// example 1: input = "Hello World", output = "hELLO wORLD"

let input = `Hello World`;

let firstLetter = input[0].toLowerCase();
let secondLetter = input[6].toLowerCase();
let all1 = input.substr(1, 5);
let all2 = input.substr(7, 10);
let upperLetters1 = all1.toUpperCase();
let upperLetters2 = all2.toUpperCase();

console.log(firstLetter + upperLetters1 + secondLetter + upperLetters2);

// ----------------------------------
// example 2: input = "This Is STRING!", output = "tHIS iS string!"

let input1 = "This Is STRING!";

let one = input1[0].toLowerCase();
let three = input1[5].toLowerCase();
let four = input1[6].toUpperCase();
let l1 = input1.substr(1, 4),
    l2 = input1.substr(7, 13);
let two = l1.toUpperCase(), 
    five = l2.toLowerCase();

console.log(one + two + three + four + five);