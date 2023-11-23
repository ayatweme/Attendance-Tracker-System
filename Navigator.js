function Navigate(location) {
    const body = document.body;
    body.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = location + ".html";
    }, 400);
  }
  
  const style = document.createElement('style');
  style.innerHTML = `
  .fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  `;
  
  document.head.appendChild(style);
  console.log('Navigated');
// Retrieve user object from session storage
const validUser = JSON.parse(sessionStorage.getItem('validUser'));

// Check if validUser is present before updating the element
if (validUser && validUser.name) {
  // Update the content of the HTML element
  document.getElementById('NameInNavBar').innerHTML = validUser.name;
} else {
  // Handle the case where validUser is not present
  console.error('User not found in session storage or missing name property.');
}


  