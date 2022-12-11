function games() {
  console.log("Sonic sdff sdf");
  console.log("dfsdsvfd");
  console.log("dsfvv");
}
games();

console.log("------------------------");

function name() {
  let title = "zelda";
  console.log(title);
}
name();

console.log("------------------------");

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) // true
console.log(isPrime(4)) //false