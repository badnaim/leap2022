// let i = 1;                    
// while (i < 100) {  
//   console.log(i);             
//   i = i * 2;                                   
// }

// let n = 5;
// let a = 0, b = 1, fib;

// while (n >= 0) {

// }

const number = 5;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series: ' + number);

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}