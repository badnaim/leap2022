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
