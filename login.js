// var authEmail = "admin@admin.com";
// var authPassword = "adminA1@";

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
  var email=document.getElementById("emailField").value;
  var password=document.getElementById("passwordField").value;
  var l=localStorage.getItem("trainers");
  var trainers=JSON.parse(l);
  //var emaill=trainers[1].email for test
  //var passwordd=trainers[1].passwordfor test

  var authEmail = "admin@admin.com";
  var authPassword = "adminA1@";
  var validUser = trainers.find(user => user.email === email && user.password === password);


  if(email===authEmail && password===authPassword){
  setTimeout(() => {
    console.log('Timeout reached. Navigating now.');
    window.location.href = location + ".html";
  }, 400);
}
else if (validUser) {
  setTimeout(() => {
    console.log('Timeout reached. Navigating now.');
    window.location.href = location + ".html";
  }, 400);
  
} 
else{
  alert("this account not registerd yet");
  window.location.href = "login.html";
}


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
