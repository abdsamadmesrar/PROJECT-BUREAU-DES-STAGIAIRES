const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", submitHanlder);

function submitHanlder(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.nextElementSibling.textContent = `${input.dataset.type} is required`;
    }
    // check username and password
    else if (
      (
        input.dataset.type === "password") &&
      input.value.trim().length <= 8
    ) {
      input.nextElementSibling.textContent = "min length of 8 charachters";
    }
    // checlk email
    else if (
      input.dataset.type === "email" &&
      !input.value.trim().includes("@")
    ) {
      input.nextElementSibling.textContent = `email format invalid`;
    } else {
      input.nextElementSibling.textContent = "";
    }
  });
}