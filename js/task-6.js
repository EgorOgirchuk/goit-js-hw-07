function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const input = document.querySelector("input[type=number]");
  const inputValue = input.value;
  if (inputValue === "") {
    alert("puste");
    return;
  }

  let boxList = "";
  let defaultWidth = 30;
  let defaultHeight = 30;

  for (let i = 0; i < Number(inputValue); i++) {
    let randomColor = getRandomHexColor();
    boxList =
      boxList +
      `<div style = 'width:${defaultWidth}px; height:${defaultHeight}px; background-color:${randomColor};'></div>`;

    defaultWidth = defaultWidth + 10;
    defaultHeight = defaultHeight + 10;
  }

  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = boxList;
});

const createDestroy = document.querySelector("[data-destroy]");
createDestroy.addEventListener("click", () => {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
});
