// 1. 2 тоо prompt - оор авна.
// 2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу.


// const min = parseInt(prompt("Enter a min value: "));
// const max = parseInt(prompt("Enter a max value: "));
const min = 1;
const max = 20;
const a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random value between ${min} and ${max} is ${a}`);

// console.log("---------------------------")

// console.log(Math.random());
// console.log(Math.floor(Math.random()));
// console.log(max - min + 1);
// console.log(Math.floor(Math.random() * (max - min + 1)));