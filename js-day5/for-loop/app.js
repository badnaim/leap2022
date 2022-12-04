// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i, " ", j);
//   }
// }

// console.log("-----------------------------");

// let output = "";

// for (let row = 1; row < 10; row++) {
//   for (let col = 1; col < 10; col++) {
//     output += col + " ";
//     // output = output + col + " ";
//   }
//   output += "\n";
//   debugger;
// }

// console.log("--------------full stars---------------");

// let n = 7,
//   space = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     space += "* ";
//     // space = space + "*";
//   }
//   space += "\n";
// }
// console.log(space);

// console.log("--------------hollow stars---------------");


// let n1 = 4,
//   space1 = "";

// for (let row = 0; row < n1; row++) {
//   for (let col = 0; col < n1; col++) {
//     if (row === 0 || row === n1 - 1) {
//       space1 += "*";
//     } else {
//       if (col === 0 || col === n1 - 1) {
//         space1 += "*";
//       } else {
//         space1 += " ";
//       }
//     }
//   }
//   space1 += "\n";
// }
// console.log(space1);

// console.log("--------------triangle---------------");

// let n2 = 4,
//   space2 = "";

// for (let row = 0; row < n2; row++) {
//   for (let col = 0; col < n2; col++) {
//     if (row === 0) {
//       space += "*";
//     } else if (row === 1) {
//       space += "*";
//     }
//   }
//   space2 += "\n";
// }
// console.log(space2);

// console.log(
//   "--------------suuleesee 3 dahi mornii omno dooguur zuraas hiiy---------------"
// );

// console.log(number.charAt(numbe.length - 3));
// console.log(number.substring(1, 3));
// number =
//   number.substring(0, number.length - 3) +
//   "_" +
//   number.substring(number.length - 3, number.lenght);
// console.log(number);

// console.log("--------------password oruulah---------------");

// let password = 123,
//   pass = prompt("enter password", " "),
//   pass1 = alert("true password");

// do {
//   console.log(pass);
//   pass = password;
// } while (pass === password);
// {
//   console.log(pass1);
// }

// console.log("--------------password oruulah 1.0---------------");

// let password = "123";
// let input; // undefined

// while (password != input) {
//   input = prompt("Enter your password: ");
// }

// console.log("--------------utasnii dugaar awah arga---------------");

let number;

while (true) {
  number = prompt("Eenter a phone number:");
  let firstChar = number.charAt(0);
  number = Number(number);
  if (Number.isInteger(number) && (number == "9" || number == "8")) {
    break;
  }
}

// console.log("--------------continue dooshoo bugdiig algasaad deed hesgiin uilduudiig zowhon ajilluulna---------------");

// let i = 0;

// while (i < 10) {
//   i++;
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// console.log("--------------c---------------");

let n = 17;
let prime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    prime = false;
    break;
  }
}
if (prime) {
  console.log("yes bitch");
} else {
  console.log("no bitch");
}
