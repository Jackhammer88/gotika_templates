let text = document.getElementById("hunter-name");
let button = document.getElementById("input-button");

function validateInput() {
    button.disabled = text.value.trim() === "";
}

text.addEventListener("input", validateInput);
validateInput();
