let n = 10;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  for (let k = 0; k < (2 * i - 1); k++) {
    process.stdout.write('*')
  }
  console.log();
}

// ------------------------------------

let n1 = 5;
let string = "";

for(let i = 0; i < n1; i++) {
  for(let j = 0; j < n1; j++) { 
    string += "*";
  }
  string += "\n";
}
console.log(string);
