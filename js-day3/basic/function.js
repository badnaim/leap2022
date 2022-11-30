// String - temdegt mor

// ( `` ) - string but special - template liberal

// ( \ \ ) whitespace character
// ( \\ ) backslash

let myString = "single quotes' double quotes \" ";
let babyShark1 = "1234567890";
let babyShark2 = "Baby shark baby \n baby shark";
let babyShark3 = "Baby \tshark909 baby \nbaby \tshark1";

console.log(babyShark3);
console.log(myString);
console.log(babyShark1.length);
console.log(babyShark1.charAt(1));
console.log(babyShark1.length - [1]);

// (ascii table) 2 iin toolliin sytem

// .charAt() & str[index] - method bogood ardaa zaawal haalttai baina

// .length - urt - function (property haalt baihgui)

// [0] = (0)

// suuliin utgiig oloh
console.log(babyShark1.length - [1]);

// .toUpperCase() & .toLowerCase()

// .concat() & str1 + str2

let firstName = "john";
let fullName = firstName.concat(" ", "Smith");
console.log(fullName); // "john smith"

// .substr (ehlehIndex, [urt]);
// index bol haaltan dotor bairlah number

let str = "javaScript String";
console.log(str.substring(0, 10)); // "Javascript"
console.log(str.substring(11, 4)); // "script"

let str1 = "This is a string";
console.log(str1.indexOf("string")); //10

// 2 is-iig arilgah
let myString1 = "a this is substring more not";
console.log(myString1.indexOf("is"));
let firstPart = myString1.substring(0, myString1.indexOf("is"));
let lastPart = myString1.substring(
  myString1.indexOf("is") + "is".length,
  myString1.length
);

console.log(lastPart);
myString1 = firstPart.concat(lastPart);

firstPart = myString1.substring(0, myString1.indexOf("is"));
lastPart = myString1.substring(
  myString1.indexOf("is") + "is".length,
  myString1.length
);

myString1 = firstPart.concat(lastPart);
console.log(myString1);

// index
// length
// backslash
// property
// method
// default

// [a,b] - a,b orno
// (a,b) - a,b orohgui hooron dahi zawsar

// alert(Math.random());

// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.floor(Math.random() * Math.abs(a - b)) + Math.min(a, b));

let number4 = 20000;
let strNum = number4.toString();

console.log(typeof strNum);
console.log(typeof number4);
