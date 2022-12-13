let rootElement = document.getElementById("neg");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "500px";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let newBox = document.createElement("div");
    rootElement.appendChild(newBox);
    newBox.style.width = "100px";
    newBox.style.height = "100px";
    newBox.style.border = "1px solid black";
    newBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
