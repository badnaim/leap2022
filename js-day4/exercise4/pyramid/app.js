let n = 10;
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  // printing stars
  for (let k = 0; k < (2 * i - 1); k++) {
    process.stdout.write('*')
  }
  console.log();
}

let n1 = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n1; i++) { // external loop
  for(let j = 0; j < n1; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
