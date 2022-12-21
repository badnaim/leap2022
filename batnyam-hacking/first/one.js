// let rootElement = document.getElementById("function");
document.getElementById("myBttn").onclick = () => {
  let pass = document.getElementById("myPassword").value;
  if (pass == "aqua") {
    document.getElementById("warn").innerText = "CORRECT";
    document.getElementById("warn").style.color = "green";
    // document.getElementById("button1").
  } else {
    document.getElementById("warn").innerText =
      "YOU ARE THE DUMBEST GUY EVER! BUT DO NOT QUIT:3";
    document.getElementById("warn").style.color = "red";
  }
};
