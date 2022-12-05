// 1. Prompt - оор 1 тоо авна.

// let number = window.prompt("1 тоо оруулна уу: ");
// let number = "565656";

// 2. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга.
// example: input = 1234567; digit: = 7;

// console.log(number.length);

// -----------------------------------

// let a = prompt("Ta hussen neg toogoo oruulna uu");
let a = 8989;
let count = 2;

while (a !== 0) {
  count = count + 1;
  a = Math.floor(a / 10);
}
console.log(count);
