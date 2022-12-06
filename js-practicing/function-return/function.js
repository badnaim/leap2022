// function return

console.log("-------------------");

function test() {
  return "hello";
}
console.log(test());

console.log("-------------------");

let login = function (password) {
  if (password === "123") {
    return "successfully logged in";
  }else {
    return "password is incorrect, please try again";
  }
};

console.log(login("00"));

console.log("-------------------");

function favNum(num) {
  return num;
}

let myFavNum = favNum(7);
console.log(`My fav number is ${myFavNum}`);

console.log("-------------------");

function password(a) {
  if (a.length > 8) {
    return console.log(`You chose ${a}`);
  }else {
    return console.log(`Not enough letter`);
  }
}
password("1234567");