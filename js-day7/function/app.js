// function myFunction(parameter1, parameter2, parameter3) {
//     // funkts dotorh koduud
// }
// function - funkts gedgiig todorhoulj baigaa js keyword buyu tulhuur ug
// myFunction - funktsiin
// {} - funktsiin undsen biy

// -----------------------------

// "Hello there!" teext hewledeg funktsiin
// todorhoilolt

function greet() {
  console.log("Hello there!");
}

// funktsiig duudah
greet();
greet();

// Ur dun ni

// Hello there

// -----------------------------

function greet1(name) {
  let i = 10;
  console.log("Hello " + name);
}
greet1("ehnii");

// -----------------------------

function myFunction(p1, p2, p3) {
  return p1 + p2 + p3;
}

let result = myFunction(2, 3, 4);

console.log(myFunction(2, 3, 4));

// -----------------------------

// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// let result1 = add(number1, number2);

// console.log(result1);

// function add(number1, number2) {
//   return number1 + number2;
// }

// -----------------------------

let a = function (name) {
  return "Hello " + name;
};

// arrow function
const b = (name) => {
  return "sainuu " + name;
};
// arrow function

console.log(a("sdamin"));
