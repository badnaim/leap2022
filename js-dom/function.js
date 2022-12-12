// document.getElementById("root").innerText = "hello world";
// document.getElementById("root").innerText = "<h1>hello world</h1>";
// document.getElementById("root").innerHTML = "<h1>hello world</h1>";
// document.getElementsByClassName("dummy")[0].innerHTML = "yo!";

// document.getElementsByTagName("body");
// document.querySelector(".ogsonClassNer");
// document.querySelector("#helloText");
// document.quertSelectorAll(".boxs");

// document.getElementsByClassName("darkMode")[0].innerHTML = "<h1>Wsup!</h1>";
// // document.getElementsByClassName("darkMode")[0].innerHTML = "<div style='color:aqua;'></div>";
// document.getElementsByClassName("darkMode")[0].style.color = "blue";
// document.getElementsByClassName("darkMode")[0].style.backgroundColor = "yellow";

// ------------------------------------

// let rootElement = document.getElementById("root");
// let ulElement = document.createElement("ul");
// rootElement.appendChild(ulElement);

// for (let i = 0; i <= 100; i++) {
//   let liElement = document.createElement("li");
//   liElement.innerText = i.toString();
//   ulElement.appendChild(liElement);
// }

// ------------------------------------

// let rootElement = document.getElementById("dummy");
// rootElement.style.display = "flex";
// rootElement.style.flexWrap = "wrap";
// rootElement.style.width = "850";

// for (let i = 0; i < 8; i++) {
//   for (let i = 0; i < 8; i++) {
//     let newDiv = document.createElement("div");
//     rootElement.appendChild(newDiv);
//     newDiv.style.width = "100px";
//     newDiv.style.heigth = "100px";
//     newDiv.style.border = "1px solid black";
//     if ((i + j) % 2 == 0) {
//       newDiv.style.backgroundColor = "grey";
//     }
//   }
// }

// let i = 0;

// setInterval(function () {
//   i++;
//   console.log(i);
// }, 1000);

// let name = "andy";
// let welcome = `${i}px`;

// -----------------background ihesdeg-------------------
// let i = 0;
// setInterval(function () {
//   document.getElementById("time").innerText = "hello world";
//   document.getElementById("time").style.backgroundColor = "blue";
//   document.getElementById("time").style.width = `${i}px`;
//   i++;
//   console.log(i);
// }, 50);

// -----------------time-------------------
let sec = 00,
  min = 00,
  hour = 00;

setInterval(function () {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  } else if (min == 60) {
    hour++;
    min = 0;
  } else if (hour == 12) {
    sec = 0;
    min = 0;
    hour = 0;
  }
  document.getElementById("time").innerHTML = `${
    hour < 10 ? "0" : ""
  }${hour}: ${min < 10 ? "0" : ""}${min}: ${sec}`;
});
