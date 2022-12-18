// Дурын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич.
let mglAlphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "Ф",
  "Х",
  "У",
  "Ц",
  "Э",
];

const alphabetics = "ФЦУЖЭНГШҮЗКЪЕЙЫБӨАХРОЛДПЯЧЁСМИТЬВЮ";

function isCorrectReg(register) {
  if (
    mglAlphabet.includes(register.charAt(0)) == true &&
    alphabetics.includes(register.charAt(1)) == true
  ) {
    for (i = 2; i < 10; i++) {
      if (isNaN(register.charAt(i)) == false && register.length == 10) {
        Number = "Регистэрийн дугаар зөв";
      } else {
        Number = "Регистэрийн дугаар биш";
        break;
      }
    }
    console.log(Number);
  } else {
    console.log("Регистэрийн дугаар биш");
  }
}

// function isCorrectReg(reg) {
//   let alphA = reg[0];
//   let alphB = reg[1];
//   if (
//     mglAlphabet.includes(alphA) &&
//     mglAlphabet.includes(alphB) &&
//     Number.isInteger(Number(reg.slice(2, 10))) &&
//     reg.lenth == 10
//   ) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }
// isCorrectReg("МЗ02221711");

// console.log("-------------------------------------");

// Хэрэв зөв бол тухайн РД аас хүйс авдаг getGender(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /

function getGender(register) {
  if (
    mglAlphabet.includes(register.charAt(0)) == true &&
    alphabetics.includes(register.charAt(1)) == true
  ) {
    for (i = 2; i < 10; i++) {
      if (isNaN(register.charAt(i)) == false && register.length == 10) {
        if (register.charAt(8) % 2 == 0) {
          Number = "Хүйс: эмэгтэй";
        } else {
          Number = "Хүйс: эрэгтэй";
        }
      } else {
        Number = "Регистэрийн дугаар биш";
        break;
      }
    }
    console.log(Number);
  } else {
    console.log("Регистэрийн дугаар биш");
  }
}

// function getGender(register, input) {

// if (register.charAt(8) % 2 == 0) {
//     if (input.includes("Эмэгтэй")) {
//       console.log("Регистэрийн дугаар хүйстэй таарч байна");
//     }else {
//       console.log("РД хүйстэй таарахгүй байна");
//     }
//   }else {
//     if (input.includes("Эрэгтэй")) {
//       console.log("Регистэрийн дугаар хүйстэй таарч байна");
//     }else {
//       console.log("РД хүйстэй таарахгүй байна");
//     }
//   }

// }
// getGender("МЗ02721901", "Эмэгтэй");

// console.log("-------------------------------------");

// РД аас төрсөн өдөр авдаг getBirthDay(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /

function getBirthDay(register) {
  if (
    mglAlphabet.includes(register.charAt(0)) == true &&
    alphabetics.includes(register.charAt(1)) == true
  ) {
    for (i = 2; i < 10; i++) {
      if (isNaN(register.charAt(i)) == false && register.length == 10) {
        if (register.charAt(4) == 2 || register.charAt(4) == 3) {
          Number = `Төрсөн он: ${
            20 + register.charAt(2) + register.charAt(3)
          } \nТөрсөн сар: ${0 + register.charAt(5)} \nТөрсөн өдөр: ${
            register.charAt(6) + register.charAt(7)
          }`;
        } else if (register.charAt(4) == 0) {
          Number = `Төрсөн он: ${
            19 + register.charAt(2) + register.charAt(3)
          } \nТөрсөн сар: ${0 + register.charAt(5)} \nТөрсөн өдөр: ${
            register.charAt(6) + register.charAt(7)
          }`;
        } else if (register.charAt(4) == 1) {
          Number = `Төрсөн он: ${
            20 + register.charAt(2) + register.charAt(3)
          } \nТөрсөн сар: ${
            register.charAt(4) + register.charAt(5)
          } \nТөрсөн өдөр: ${register.charAt(6) + register.charAt(7)}`;
        } else {
          Number = "Регистэрийн дугаар биш";
          break;
        }
      } else {
        Number = "Регистэрийн дугаар биш";
        break;
      }
    }
    console.log(Number);
  } else {
    console.log("Регистэрийн дугаар биш");
  }
}

// console.log("-------------------------------------");

// РД аас төрсөн аймгийг олдог getBirthRegion(register)  функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ.

let province = [
  "Архангай",
  "Баян-Өлгий",
  "Баянхонгор",
  "Булган",
  "Говь-Алтай",
  "Дорноговь",
  "Дорнод",
  "Дундговь",
  "Завхан",
  "Өвөрхангай",
  "Өмнөговь",
  "Сүхбаатар",
  "Сэлэнгэ",
  "Төв",
  "Увс",
  "Ховд",
  "Хөвсгөл",
  "Хэнтий",
  "Дархан-Уул",
  "Орхон",
  "Говьсүмбэр",
  "Улаанбаатар",
  "Улаанбаатар",
];

function getBirthRegion(register) {
  let indexKey;
  let firstLetter = register[0];

  if (mglAlphabet.includes(firstLetter)) {
    indexKey = mglAlphabet.indexOf(firstLetter);
    console.log(`Харьяа бүс нутаг: ${province[indexKey]}`);
  } else {
    console.log("Регистэрийн дугаар биш");
  }
}

// console.log("-------------------------------------");

// Дээрх бүх утгыг хэвлэдэг getRegisterInfo(register) функц бичнэ үү.

function getRegisterInfo(registerID) {
  isCorrectReg(registerID);
  getGender(registerID);
  getBirthDay(registerID);
  getBirthRegion(registerID);
}
getRegisterInfo("ХЗ15391558");
