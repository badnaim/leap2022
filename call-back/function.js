// let customScroll = document.getElementById("one");

// window.addEventListener("scroll", () => {
//   let first = window.scrollY;
//   let second = Math.floor((first * 100) / window.innerHeight);
//   customScroll.innerHTML = `${second}%`;
// });

window.addEventListener("scroll", () => {
  let percent = Math.floor(
    (window.scrollY * 100) /
      (document.querySelector("body").clientHeight - window.innerHeight)
  );
  document.querySelector("#percentage").innerText = `${percent}%`;
});

document.getElementById("bttn").innerText = "click";
document.getElementById("bttn").style.color = "white";
document.getElementById("bttn").style.display = "flex";
document.getElementById("bttn").style.justifyContent = "center";
document.getElementById("bttn").style.alignItems = "center";
document.getElementById("bttn").style.fontSize = "20px";

// const button = document.querySelector("bttn");

// function toggle() {
//   button.classList.toggle("altColor");
// }

// button.addEventListener("click", toggle);
