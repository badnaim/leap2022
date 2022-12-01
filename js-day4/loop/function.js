// loop - dawtalt

let count = 10;
while (count >= 1) {
  console.log(count);
  count = count - 1;
}

console.log("------------");

// ascii number to convert

let word = "abc123";

console.log(word.charCodeAt(3));

console.log("------------");

let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let count1 = 0;
let countA = 0;

// console.log(lorem.length - [1]);

while (count1 < lorem.length) {
  if (lorem[count1] == "a" || lorem[count1] == "A") {
    countA = countA + 1;
  }
  count1 = count1 + 1;
}
console.log(countA);

console.log("------------");

let count2 = 0;
let countB = 0;

while (count2 < lorem.length) {
  if (lorem[count2] == "b" || lorem[count2] == "B") {
    countB = countB + 1;
  }
  count2 = count2 + 1;
}
console.log(countB);

console.log("------------");

let number = 15;
number++; // (number = number +1 increment) (number-- -> number = number -1 decrement)
console.log(number);

console.log("------------");

let num3 = 100,
  count3 = 0;

while (num3 > 0) {
  if (num3 % 3 === 0) {
    count3++;
  }
  num3--;
}
console.log(count3);

console.log("------------");

// let sum = 0,
//   i = 1;

// while (i <= 100) {}

console.log("------------");
// pyramid

let star = "*";

console.log("------------");
// fibonacci

let a = 1,
  b = a,
  c = a + b;

console.log("------------");

let x = 10;
let count4 = 1;
let output = "";

while (x > 0) {
  let y = 10;
  while (y > 0) {
    output = output + count4 + "\t";
    if (count4 % 10 == 0) output += "\n"; // output = output + "\n"
    y--;
    count4++;
  }
  x--;
}
console.log(output);

console.log("-----15-------");

let x1 = 10;
let count5 = 1;
let output1 = "";

while (x1 > 0) {
  let y = 10;
  while (y > 0) {
    output1 = output1 + count5 + "\t";
    if (count5 % 15 == 0) output1 += "\n"; // output = output + "\n"
    y--;
    count5++;
  }
  x1--;
}
console.log(output1);

// loopeer random too generate hiij ireh 20 shirheg
