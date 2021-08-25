const form = document.querySelector("form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#recheck-password");

// Define showError Massage
function showError(input, massage) {
  const inputGroup = input.parentElement;
  inputGroup.className = "input-group error";
  const smallTag = inputGroup.querySelector("small");
  smallTag.innerHTML = massage;
}

// Define success massag
function showSuccess(input) {
  const inputGroup = input.parentElement;
  inputGroup.className = "input-group success";
}

// Define email validation function
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "email is not valid");
  }
}

// Define check required function
function checkrequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Define check length function
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} is must be has at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} is less than ${max} characters`);
  }
}

// Define password match function
function passwordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  } else {
    showSuccess(input2);
  }
}

// Add event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkrequired([userName, email, password, password2]);
  checkLength(userName, 3, 8);
  checkLength(password, 5, 12);
  checkEmail(email);
  passwordMatch(password, password2);
});
