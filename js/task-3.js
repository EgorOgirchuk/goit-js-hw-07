const nameInput = document.querySelector("#name-input");
let value = "";

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  let inputedValue = nameInput.value;
  inputedValue = inputedValue.trim();

  if (inputedValue == "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = inputedValue;
  }
});
