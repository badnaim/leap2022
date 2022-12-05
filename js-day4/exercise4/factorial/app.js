// Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна

// n!=1⋅2⋅3⋅⋯⋅n

// 5! = 120 / 1*2*3*4*5/

// Бодлого :
// prompt - оор гараас тоо авч тэр тооныхоо факториалыг олох.

//------------------------------------
number = 5;

if (number < 0) {
  console.log("Error! Factorial for negative number does not exist.");
} else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
} else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}
