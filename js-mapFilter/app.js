// let cheap = foods.filter((food) => food.price < 1); // returns boolean
// let sortedNames = names.sort(); // returns number positive or negative , 2 utga barij awna
// let prices = foods.map(food) => food.price; // returns anything

// let cheap = foods.filter((food) => {
//     console.log("hfusdf");
//     return
// })

// let newFoods = foods.map((food) => )
// let newFoods = foods.map(customMap);
// let newFoods2 = foods.map(customMap()); //ingej bolohgui
// let newFoods1 = foods.map((food)=>customMap(food));

// let numbers = [1, 23, 45, 56, 362, 23, 2, 6, 4];

// numbers.sort((a, b) => a - b); //returns number (positive || negative) ihees bagaruu or bagaas ihruu
// console.log(numbers);

let foods = [
  {
    name: "baked beans",
    price: 0.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "refried beans",
    price: 0.99,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "kidney beans",
    price: 0.58,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "garden peas",
    price: 0.52,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "mushy peas",
    price: 0.58,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "corned beef",
    price: 2.39,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "tomato soup",
    price: 1.4,
    image: "tomatosoup.jpg",
    type: "soup",
  },
  {
    name: "chopped tomatoes",
    price: 0.45,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "chicken noodle soup",
    price: 1.89,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "carrot and coriander soup",
    price: 1.49,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
];

// let newFoods = foods.map((food) => [food.price, food.type]);
// console.log(newFoods);

let imageAndType = foods.map((food) => [food.image, food.type]);
console.log(imageAndType);

let iT = foods.filter((food) => food.price > 1);
console.log(iT);

// let sortedNames = foods.sort((food) => {
//   if (food[0].length > 20) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// examples

let students = [
  {
    firstName: "Johnny",
    lastName: "Lee",
    age: 20,
  },

  {
    firstName: "Anna",
    lastName: "Zax",
    age: 19,
  },

  {
    firstName: "Zion",
    lastName: "Sanches",
    age: 22,
  },
];

students.sort((a, b) => {
  return a.age - b.age;
});

students.forEach((e) => {
  console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});

console.log("---------");

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);

console.log(result);

console.log("---------");

const nn = [10, 20, 30, 40];

let a = nn.filter(function () {
  return true;
});

console.log(a);

let b = nn.filter(function (e) {
  return e < 30;
});

console.log(b);

let c = nn.filter(function (e, index) {
  return index % 2 === 0;
});

console.log(c);

console.log("---------");

const myArray = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Sam" },
  { id: 3, name: "Sandy" },
  { id: 4, name: "Mark" },
];

let xmas = myArray.filter((element) => {
  if (element.name === "Mark") {
    return element.id;
  }
});
console.log(xmas);
