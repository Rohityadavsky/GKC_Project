
const keyElement = document.querySelector(".key p");
const keyCodeElement = document.querySelector(".keycode p");

window.addEventListener("keydown", (e) => {
  keyElement.innerText = e.key;
  keyCodeElement.innerText = e.keyCode;
  if (e.keyCode === 32) keyElement.innerText = `Space`;
});

