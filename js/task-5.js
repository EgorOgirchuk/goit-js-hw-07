function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  let color = document.querySelector(".change-color");

  color.addEventListener("click", changeColorBody);
});

const changeColorBody = () => {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;

  let span = document.querySelector("span.color");
  span.innerHTML = randomColor;
};
