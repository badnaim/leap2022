// Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.

// console.log() ашиглан array хэвлэх

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log("------------------------------");
// Array дахь компаниудын length хэвлэх

let space = "";

for (i = 0; i < itCompanies.length; i++) {
  space += itCompanies[i].length + " ";
}
console.log(space);

console.log("------------------------------");
// Эхний компани, дунд болон сүүлчийн компанийг хэвлэх

let space1 = "";

for (i = 0; i < itCompanies.length; i++) {
  space1 = itCompanies[0] + " " + itCompanies[6];
}
console.log(space1);

console.log("------------------------------");
// Компани бүрийг хэвлэх

let space2 = "";

for (i = 0; i < itCompanies.length; i++) {
  space2 += itCompanies[i] + " ";
}
console.log(space2);

console.log("------------------------------");
// Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга

// let space3 = "";
// let x = itCompanies;

// for (i = 0; i < itCompanies.length; i++) {
//   for (j = 0; j < itCompanies.length; j++) space3 += itCompanies[i] + " ";
//   space3 =
// }
// console.log(space3.toUpperCase);

let space3 = "";

for (i = 0; i < itCompanies.length; i++) {
  space3 += itCompanies[i] + " ";
}
console.log(space3.toUpperCase());

console.log("------------------------------");
// Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.

// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

console.log(
  itCompanies.join(", "),
  "зэрэг мэдээллийн технологийн томоохон компаниуд."
);
