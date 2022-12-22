// callback function n functiong oor function ruu parameter helbereer damjuulj tuhain functioniig ashiglahiig helne

// function (callback) {
//   callback();
// }

function greeting(name) {
  console.log(`hello, ${name}`);
}

function greetings(callback) {
  const name = "one";
  callback(name);
}

greetings(greeting);

// callback function hereglee

// jishee1
function log() {
  console.log("Hello world");
}
setTimeout(log, 1000);

// jishee2
// function log1() {
//   console.log("Hello");
// }
// setInterval(log1, 1000);

// jishee3
// ------------
// function log2() {
//   console.log("wsup");
// }
// const btn = document.querySelectorAll("button")[0];

// btn.addEventListener("click", log2);
// ------------

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
let odd1 = filter(numbers, (n) => {
  return n % 2 !== 0;
});
let odd2 = filter(numbers, (n) => {
  return n % 3 === 0;
});

console.log(evens, odd1, odd2);
