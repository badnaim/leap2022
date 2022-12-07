// Дурын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич.

function isCorrectReg(register) {
  if (isNaN(register.charAt(0)) == true && isNaN(register.charAt(1)) == true) {
    for (i = 2; i < 10; i++) {
      if (isNaN(register.charAt(i)) == false && register.length == 10) {
        notNumber = "RD yes";
      } else {
        notNumber = "RD no";
        break;
      }
    }
    console.log(notNumber);
  } else {
    console.log("RD no");
  }
}
isCorrectReg("МЗ02221711");

// ----------------------

// function isCorrectReg(reg) {
//   if (
//     alphabet.includes(reg[0]) &&
//     alphabet.includes(reg[1]) &&
//     Number.isInteger(Number(reg.slice(2, 10))) &&
//     reg.length == 10
//   ) {
//     console.log(reg);
//   } else {
//     console.log("RD no");
//   }
// }
// isCorrectReg("МЗ87878787");

// Хэрэв зөв бол тухайн РД аас хүйс авдаг getGender(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /

// РД аас төрсөн өдөр авдаг getBirthDay(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
// РД аас төрсөн аймгийг олдог getBirthRegion(register)  функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
// Дээрх бүх утгыг хэвлэдэг getRegisterInfo(register) функц бичнэ үү.
// А = Архангай
// Б = Баян-Өлгий
// В = Баянхонгор
// Г = Булган
// Д = Говь-Алтай
// Е = Дорноговь
// Ж = Дорнод
// З = Дундговь
// И = Завхан
// Й = Өвөрхангай
// К = Өмнөговь
// Л = Сүхбаатар
// М = Сэлэнгэ
// Н = Төв
// О = Увс
// П = Ховд
// Р = Хөвсгөл
// С = Хэнтий
// Т = Дархан-Уул
// Ф = Орхон
// Х = Говьсүмбэр
// У = Улаанбаатар
// Ц = Улаанбаатар
