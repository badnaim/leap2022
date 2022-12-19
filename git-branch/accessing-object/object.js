let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 23,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих

function maleOrFemale(list) {
  let maleSum = 0;
  for (i = 0; i < list.length; i++) {
    if (list[i].gender.includes("female")) {
      maleSum += 1;
    }
  }
  console.log("emegtei: ", maleSum);
  console.log("eregtei: ", list.length - maleSum);
}
maleOrFemale(students);

console.log("------------------");

// Сурагчдын насны дунджийг олох функц бичих

function avgStudents(list) {
  let sum = 0,
    avg = list.length;
  for (i = 0; i < list.length; i++) {
    sum += list[i].age;
  }
  console.log("Suragchdiin nasnii dundaj: ", sum / avg);
}
avgStudents(students);

console.log("------------------");

// Сурагчидад овог нэмж оруулах

console.log("Suragchdiin owog ner: ");
let parents = ["Shaggy", "Maggy", "Zaggy", "Gamshig", "Aimshig"];
function setParent(lastName, firstName) {
  for (i = 0; i < firstName.length; i++) {
    fullName = lastName[i] + " " + firstName[i].name;
    console.log(fullName);
  }
}
setParent(parents, students);

console.log("------------------");

// Ижилхэн настай сурагчдыг олж шинэ array дотор хийх

// let sameAgedStudents = [];
// function addSameAgedSt (list) {
//     for(i = 0; i < list.length; i++) {
//         for(j = 0; j < list.length; j++) {
//             if (list[i].age == list[j].age)
//         }
//     }
//     Object.create()
// }
