// array

let studentAges = [10, 20, 30, 40, 50, 60, 70];
let studentAges1 = ["boldo", 20, null];
let studentAges2 = new Array(10, 20, 30, 40);

// console.log(studentAges[0]);
// console.log(studentAges1);
// studentAges[studentAges.length - 1];
// studentAges[studentAges.length - 1] = 100;

let b = studentAges.length;

for (a = 0; a < b; a++) {
  console.log(studentAges[a]);
}

console.log("----------------");

let studentNames = ["bodlo", "dorjo", "tsetsgee", "dulmaa"];
let i = 0;
while (i <= studentNames.length) {
  if (studentNames[i] && studentNames[i][0] === "d") {
    console.log(studentNames[i]);
  }
  i++;
}

console.log("----------------");

// hamgiin ih usegtei neriig oloh

let classNames = [
  "yunchir",
  "narmandah",
  "usuhbayar",
  "munhsuld",
  "bayanmunh",
  "murun",
  "nomin",
  "narandelgereh",
  "batsuh",
  "uugan-erdene",
  "munhbat",
  "jamyanpurew",
  "batnyam",
  "enhtuul",
  "sharawnyambuu",
  "yalalt",
  "munhtulga",
  "maral",
  "otgonbayar",
  "baljinnyam",
];

maxName = "";
// console.log(maxName.length);
for (i = 0; i < classNames.length; i++) {
  if (maxName.length < classNames[i].length) {
    maxName = classNames[i];
  }
}
console.log(maxName);
// console.log("----------------");

// array Element burd handahiin tuld daraah baidlaar guitsetgej bolno

// date

// let now = new Date();
// console.log(now);
