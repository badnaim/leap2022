// example 1: input = "Hello World", output = "hELLO wORLD"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
let input = "HELLO WORLD";
// space = "";

function converter(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (upper.includes(str[i])) {
      result += str[i].toLowerCase();
    } else if (lower.includes(str[i])) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(converter("HELLO"));

// example 2: input = "This Is STRING!", output = "tHIS iS string!"
