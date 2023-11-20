var authEmail = "admin@admin.com";
var authPassword = "adminA1@";

document.getElementById('passwordLogo').addEventListener('click', function () {
  const passwordField = document.getElementById("passwordField");
  const element = document.getElementById("passwordLogo");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      element.classList.remove("ri-eye-off-line");
      element.classList.add("ri-eye-line");
  } else {
      passwordField.type = "password";
      element.classList.remove("ri-eye-line");
      element.classList.add("ri-eye-off-line");
  }
});

function validateForm() {
  var email = document.getElementById('emailField').value;
  var password = document.getElementById('passwordField').value;
  var emailRegex = /^\S+@\S+\.\S+$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  var isValid = true;

  if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerHTML = "Invalid email address.";
      isValid = false;
  }

  if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').innerHTML = "Invalid password. It must contain at least 8 characters, including uppercase, lowercase letters, and numbers.";
      isValid = false;
  }

  // navigator handler missing

  return isValid;
}