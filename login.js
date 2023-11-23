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

function handleLogin(event, location) {
  event.preventDefault(); // Prevent default form submission
  console.log('Navigating to:', location);
  const body = document.body;
  body.classList.add('fade-out');

  setTimeout(() => {
    console.log('Timeout reached. Navigating now.');
    window.location.href = location + ".html";
  }, 400);
}