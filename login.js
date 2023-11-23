
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

  const email = document.getElementById("emailField").value;
  const password = document.getElementById("passwordField").value;

  // Retrieve trainers from local storage
  const storedTrainers = localStorage.getItem("trainers");
  const trainers = storedTrainers ? JSON.parse(storedTrainers) : [];

  // Define predefined authentication credentials
  const authEmail = "admin@admin.com";
  const authPassword = "adminA1@";

  // Check if the entered credentials match predefined authentication credentials
  if (email === authEmail && password === authPassword) {
    sessionStorage.setItem(email);
    navigateWithTimeout(location);
  } else {
    // Check if there is a user with matching credentials
    const validUser = trainers.find(user => user.email === email && user.password === password);

    if (validUser) {
      sessionStorage.setItem("validUser",JSON.stringify(validUser));
      navigateWithTimeout(location);
    } else {
      alert("This account is not registered yet");
      window.location.href = "login.html";
    }
  }
}

// Function to navigate to a specified location with a timeout
function navigateWithTimeout(location) {
  setTimeout(() => {
    console.log('Timeout reached. Navigating now.');
    window.location.href = location + ".html";
  }, 400);
}




function validatePassword() {
  var pass = document.getElementById("passwordField").value;

  
  var validationMessage = document.getElementById("passwordError");
  if (pass.length < 6 || !/[A-Z]/.test(pass)) {
      validationMessage.innerText = 'Password must be at least 6 characters long and contain at least one capital letter.';
  } else {
      validationMessage.innerText = '';
  }
}
