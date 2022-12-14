// example 1: input = "Hello World", output = "hELLO wORLD"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
let input = "Hello World",
input1 = "This Is STRING!";

function converter(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (upper.includes(str[i])) {
      result += str[i].toLowerCase();
      if (lower.includes(str[i])) {
        result += str[i].toUpperCase();
      }
    } else if (lower.includes(str[i])) {
      result += str[i].toUpperCase();
      if (upper.includes(str[i])) {
        result += str[i].toLowerCase();
      }
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(converter(input));

