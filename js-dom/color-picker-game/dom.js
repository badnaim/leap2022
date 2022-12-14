let rootElement = document.getElementById("neg");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "500px";

let elements = document.getElementsByTagName("div");

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let d = Math.floor(Math.random() * 15);
console.log(d);
for (let i = 0; i < 16; i++) {
  let newBox = document.createElement("div");
  rootElement.appendChild(newBox);
  newBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  newBox.style.width = "100px";
  newBox.style.height = "100px";
  newBox.style.border = "1px solid white";
  if (d == i) {
    newBox.style.backgroundColor = `rgb(${r + 30}, ${g}, ${b})`;
  }
}
