// Object

let person = {
  firstname: "Naranbayar",
  lastname: "Bat",
  age: 22,
  score: [77, 90, 85, 100],
  isMarried: false,
  fun1: () => {
    return "person";
  },
};

console.log(person);

// object dotor function bichij bolno

// object dotor baigaa function bol method , busad n property buyu omch+++++++

// arrow function
let func = () => {
  console.log("person");
};

// regular function
function getPerson() {
  console.log("person");
}

console.log(person.age);
console.log(person.fun1());

// console.log(person.age); = same = console.log(person.["age"]);

let person1 = {
  firstname: "Naraa",
};
let person2 = person1;

person2.firstname = "dorj";
console.log(person1.firstname);
console.log(person2.firstname);

console.log("--------------------");
// ... :spread operator

// person2 = { ... person1}
// person2.firstname

// huulaad omnohoo oorchlohguigeer daraagiinhaa oorchlogdono
let nnn = [10, 20, 30];
let mmm = [...nnn];
mmm[0] = 100;

console.log(mmm);

console.log("--------------------");

// object function

let persson = {
  name: "hair",
  age: 21,
};

console.log(Object.values(persson));

console.log("--------------------");

// tamirchin toirgoor guideg, 10, 15, 20 second guideg, tamirchin array zohioh

let athlets = [
  { name: "Bold", height: 180, age: 21, record: [10, 20, 30] },
  { name: "Bat", height: 170, age: 19, record: [5, 15, 25] },
  { name: "Dorj", height: 190, age: 25, record: [16, 29, 38] },
];

console.log(
  Math.floor(
    (athlets[0].age + athlets[1].age + athlets[2].age) / (athlets.length + 1)
  )
);
let sum = 0,
  sum1 = 0,
  sum2 = 0,
  avg = 0;

// for (let i = 0; i < athlets.length; i++) {
//   for (let j = 0; j < athlets[i].length; j++) {
//     sum += athlets[i];
//     avr = sum / (athlets.length + 1);
//   }
//   console.log(avr);
// }

for (i = 0; i < athlets.length; i++) {
  sum += athlets[i].age;
  for (j = 0; j < athlets[i].record.length; j++) {
    sum1 += athlets[i].record[j];
  }
  sum2 = sum1 / athlets[i].record.length;
  avg += sum2;
}
console.log("Average age: " + Math.floor(sum / (athlets.length + 1)));
console.log("Average record: " + Math.floor(s / (athlets.length + 1)));
