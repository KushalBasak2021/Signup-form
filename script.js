let submitBtn = document.querySelector("button");
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

function checkInputs(e) {
  e.preventDefault();
  if (firstName.value == "") {
    setError(firstName, "First Name cannot be blank");
  } else {
    setSuccess(firstName);
  }

  if (lastName.value == "") {
    setError(lastName, "Last Name cannot be blank");
  } else {
    setSuccess(lastName);
  }

  if (email.value == "") {
    setError(email, "Email Address cannot be blank");
  } else if (!validateEmail(email.value)) {
    setError(email, "Please give a valid email");
  } else {
    setSuccess(email);
  }

  if (password.value == "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }
}

function setError(input, msg) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  let inputEl = formControl.querySelector("input");
  let exclamationCircle = formControl.querySelector(".fa-circle-exclamation");
  let checkCircle = formControl.querySelector(".fa-circle-check");
  checkCircle.style.visibility = "hidden";
  inputEl.style.border = "3px solid #e74c3c";
  small.innerHTML = msg;
  small.style.display = "block";
  small.style.color = "#e74c3c";
  small.style.fontSize = "15px";
  exclamationCircle.style.visibility = "visible";
  exclamationCircle.style.fontSize = "20px";
  exclamationCircle.style.color = "#e74c3c";
}

function setSuccess(input) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  let inputEl = formControl.querySelector("input");
  let checkCircle = formControl.querySelector(".fa-circle-check");
  let exclamationCircle = formControl.querySelector(".fa-circle-exclamation");
  small.style.display = "none";
  exclamationCircle.style.visibility = "hidden";
  inputEl.style.border = "3px solid #2ecc71";
  checkCircle.style.visibility = "visible";
  checkCircle.style.fontSize = "20px";
  checkCircle.style.color = "#2ecc71";
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

submitBtn.addEventListener("click", checkInputs);
