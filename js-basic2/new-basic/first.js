// let a = 15;
// let b = 10;
// console.log(a >= b);

// negation - tentsuu bish , esreg shu

/*let a = 20;
let b = 20;
let answer = a != b;

console.log(answer);*/

// assigmnet operator - suulgaj ogoh
// conditional operator -

// == horwuulj hoorond n shalgah, hatuu buyu torliig n dawhar shalgadag
// === horwuulehguigeer hoorond n shalgah ihewchlen ashiglah, hatuu buyu torliig n dawhar shalgadag
// !== tentsu bish esehiig shalgah
// === & !==

// let a = 20;
// let b = 20;
// let answer = a === b;

// console.log(answer);

let myAge = 22;

if (myAge >= 21) {
  console.log("Orhiig zowshoorii yahw");
} else {
  console.log("Orohiig zowshoorohgui biich");
}

let hisAge = 23;

if (hisAge < 11) {
  console.log("you are batsaan");
} else if (hisAge < 18) {
  console.log("you are tom batsaan");
} else if (hisAge < 21) {
  console.log("you are nasand hursen batsaan");
} else {
  console.log("you are hugshin batsaan");
}

// ---------------------------------
console.log();

let day = -1;

if (day === 1) {
  console.log("monday");
} else if (day === 2) {
  console.log("tuesday");
} else if (day === 3) {
  console.log("wednesday");
} else if (day === 4) {
  console.log("thursday");
} else if (day === 5) {
  console.log("friday");
} else if (day === 6) {
  console.log("saturday");
} else if (day === 7) {
  console.log("sunday");
} else {
  console.log("error dude");
}

// ---------------------------------
console.log();

let weekNumber = 6;
let weekName;

if (weekNumber == 1) {
  weekName = "Dawaa";
} else if (weekNumber == 2) {
  weekName = "Myagmar";
} else if (weekNumber == 3) {
  weekName = "Lhagwa";
} else if (weekNumber == 4) {
  weekName = "Purew";
} else if (weekNumber == 5) {
  weekName = "Baasan";
} else if (weekNumber == 6) {
  weekName = "Byamba";
} else if (weekNumber == 7) {
  weekName = "Nyam";
} else {
  weekName = "shut up!";
}

console.log(weekName);

// ---------------------------------
console.log();

// Хэрэв нэгээс олон үйлдэх хийх бол бүх үйлдлээ буржгар хаалт `{ }` дотор хийнэ.
// if (нөхцөл) {
//   үйлдэл1;
//   үйлдэл2;
// }

let age7 = 20;
if (age7 >= 18) {
  console.log("Tanii nas:", age7);
  console.log("Ta nasand hursen baina.");
}

// logic operator

// - not(!)
// - and (&&)
// - or (||)

let weekday = 3;
let weekname;

if (weekday < 1 || weekday <= 7) {
  console.log("error");
}

if (weekday >= 1 && weekday <= 7) {
  if (weekday == 1) {
    weekname = "monday";
  } else if (weekday == 2) {
    weekname = "tuesday";
  } else if (weekday == 3) {
    weekname = "wednesday";
  }
} else {
  console.log("error");
}

// ---------------------------------
console.log();

let weekday9 = 2;

switch (weekday9) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("not a day");
}

// ---------------------------------
console.log();

if (
  weekday == 1 ||
  weekday == 2 ||
  weekday == 3 ||
  weekday == 4 ||
  weekday == 5
) {
  console.log("working day");
}

let day0 = 3;
switch (day0) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Ajliin odor");
    break;
  case 6:
  case 7:
    console.log("Amralt");
    break;
}

let x = 10,
  y = 20,
  z = 30;

if (x > y) {
  if (x > z) {
    console.log(x, " hamgiin ih");
  } else {
    console.log(z, "n hamgiin ih");
  }
} else {
  console.log(y, " n hamgiin ih");
}

if (x > y && x > z) {
  console.log(x, " n hamgiin ih");
} else if (y > z) {
  console.log(y, " n hamgiin ih");
} else {
  console.log(z, " n hamgiin ih");
}

let number = 17;
if (number % 2 == 1) {
  console.log(number, "sondgoi");
}

let num1 = 7;
console.log();

// int - integer--------float - butarhai too-------

// ternary -- bichiglel-------------------

let age5 = 22;

if (age5 < 21) {
  console.log("You are not allowed");
} else {
  console.log("You are allowed");
}

age5 < 21
  ? console.log("You are not allowed to drink alchohol")
  : console.log("you are allowed");

condition ? true : false;

let myStatue = age5 >= 10 && age5 <= 18 ? "teenage" : "adult";

const myStatue1 = age5 >= 10 && age5 <= 18 ? "teenage" : "adult";
