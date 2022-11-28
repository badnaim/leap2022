// exercise1-----------------js basic--------------

/*19. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-/*%) гүцэтгээд үр дүнг нь дараах байдлаар харуул: 
Өгөгдсөн 2 тооны нийлбэр нь 25 
Өгөгдсөн 2 тооны ялгавар нь 5*/

console.log("-------------");

let myNumber1 = 3;
let myNumber2 = 2;
let nemeh = "Subtraction of given 2 numbers is ";
let hasah = "Addition of given 2 numbers is ";

console.log(nemeh + (myNumber1 + myNumber2));
console.log(hasah + (myNumber1 - myNumber2));
console.log(myNumber1 * myNumber2);
console.log(myNumber1 / myNumber2);
console.log(myNumber1 % myNumber2);

// exercise2-----------------js basic---------------

//1 comments can make code readable

/*2 comments 
can 
make 
code 
readable*/

// 6. utga onoogoogui huwisagch zarlah
let hello;

// 7. utga onooson huwisagch zarlah

let world = "mindless";

// 8. Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах

let firstName = "Batnyam";
let lastName = "Tumurbat";
let martialStatus = "Single";
let country = "Mongolia";
let age = 20;

// 9. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах

let firstName1 = "Batnyam",
  lastName2 = "Tumurbat",
  martialStatus3 = "Single",
  country4 = "Mongolia",
  age5 = 20;

//   10. MyAge, yourAge нэртэй хувьсагч зарлан эхний утгыг оноох

let MyAge = 20;
let yourAge = 19;

// 11. Гурвалжингийн периметрийг олох 

let aSide = 10,
    bSide = 15,
    cSide = 20;

let pTriangle = aSide + bSide + cSide;

console.log(pTriangle);

// 12. Тойргийн талбайг олох 

let radius = 5,
    p = 3.14;

let sCircle = radius ** 2 * p;

console.log(sCircle);

// 13. m = y2-y1/x2-x1 хариуг олох ????


// 14. 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?

let bit = 1,
    byte = 8 * bit,
    KB = 1024 * byte,  
    MB = 1024 * KB,
    GB = 1024 * MB;

console.log(GB*15 + " bit");

// 15. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.

console.log(MB * 15 + " bit");

// 16. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

let side1 = 3,
    side2 = 4,
    side3 = 5;
var pi = (side1 + side2 + side3)/2;
var s = Math.sqrt(pi * ((pi - side1) * (pi - side2) * (pi - side3)));

console.log(pi);
console.log(s);

console.log("");
// 17. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

let c = 10;
let f = (c * 9/5) + 32;

console.log(c + " цельс нь " + f + " фаренгейт болно.");

console.log("");
// 18. Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.


/*19. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-/*%) гүцэтгээд үр дүнг нь дараах байдлаар харуул: 
Өгөгдсөн 2 тооны нийлбэр нь 25 
Өгөгдсөн 2 тооны ялгавар нь 5*/

// 20. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх

let x = 2;
let inch = 0.39 * x;

console.log(x + " сантиметрт " + inch + " инч байна.");

let y = 5;
let cm = 2.54 * y;

console.log(y + " инч-д " + cm + " сантиметр байна.");

console.log("");
//  21. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.



// 22. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич

let nuum1 = 973;
let nuum2 = (nuum1 - (nuum1 % 10)) / 10;
let nuum3 = (nuum2 - (nuum2 % 10)) / 10;

console.log(nuum1 + " тооны хамгийн эхний цифр бол " + nuum3);

console.log("");
// 23. Доорх Baby Shark дууны үгийг хамгийн ихдээ 12 хувьсагч ашиглан орлуулан бичээд console дээр дарааллуулан хэвлэж харуулна уу. 

let baby = "Baby Shark",
    mommy = "Mommy Shark",
    daddy = "Daddy Shark",
    grandma = "Grandma Shark",
    grandpa = "Grandpa Shark",
    go = "Lets go hunt",
    run = "Run away",
    safe = "Safe at last"
    end = "It's the end",
    doo = ", doo-doo, doo-doo",
    ah = " (ah!)",
    phew =" (phew)";

console.log(baby + doo);
console.log(baby + doo);
console.log(baby + doo);
console.log(baby);
console.log("");
console.log(mommy + doo);
console.log(mommy + doo);
console.log(mommy + doo);
console.log(mommy);
console.log("");
console.log(daddy + doo);
console.log(daddy + doo);
console.log(daddy + doo);
console.log(daddy);
console.log("");
console.log(grandma + doo);
console.log(grandma + doo);
console.log(grandma + doo);
console.log(grandma);
console.log("");
console.log(grandpa + doo);
console.log(grandpa + doo);
console.log(grandpa + doo);
console.log(grandpa);
console.log("");
console.log(go + doo);
console.log(go + doo);
console.log(go + doo);
console.log(go);
console.log("");
console.log(run + doo);
console.log(run + doo);
console.log(run + doo);
console.log(run + ah);
console.log("");
console.log(safe + doo);
console.log(safe + doo);
console.log(safe + doo);
console.log(safe + phew);
console.log("");
console.log(end + doo);
console.log(end + doo);
console.log(end + doo);
console.log(end);
