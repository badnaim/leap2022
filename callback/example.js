// function doSomething(func1, func2) {
//   setTimeout(() => {
//     if (now.getHours() < 18) {
//       func1();
//     } else {
//       func2();
//     }
//   }, 2000);
// }

// function printHello() {
//   console.log("Hello");
// }
// function printBye() {
//   console.log("Bye");
// }

// const now = new Date();

// doSomething(printHello, printBye);

// -------------------

// let customButton = document.getElementById("root");

// const something = () => {
//   console.log("Clicked");
// };

// customButton.addEventListener("click", something);
// customButton.innerText = "Click Me";

// ------------------

// function greeting(name) {
//   alert(`Hello, ${name}`);
// }
// function greetings(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// greeting(greeting);

// ------------------

// function log() {
//   console.log("Hello world");
// }
// setInterval(log, 1000);

// ------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(numbers, callback) {
  let results = [];
  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      results.push(numbers[i]);
    }
  }
  return results;
}

const evens = filter(numbers, (n) => {
  return n % 2 === 0;
});
// [2, 4, 6, 8]
const odds = filter(numbers, (n) => {
  return n % 2 !== 0;
});
// [1, 3, 5, 7]
// const odds = filter(numbers, (n) => {return n%3===0});
// [3, 6, 9]
console.log(evens);
