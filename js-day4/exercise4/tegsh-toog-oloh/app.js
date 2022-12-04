// while loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох.

let i = 0;

while (i <= 100) {
  let a = i % 2;
  if (a === 0) {
    console.log(i);
  }
  i = i + 1;
}