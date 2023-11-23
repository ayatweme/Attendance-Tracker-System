// const userData = JSON.parse(localStorage.getItem('userData'));
// // Check if user data exists in local storage
// if (userData) {
//     // Display user data in the profile card
//     document.getElementById('profileImage').src = userData.profileImage || 'assets\img\default-profile-image.jpg';
//     document.getElementById('profileFirstName').innerText = userData.FirstName || 'N/A';
//     document.getElementById('profileLastName').innerText = userData.LastName || 'N/A';
//     document.getElementById('profileEmail').innerText = userData.email || 'N/A';
//     document.getElementById('profilePassword').innerText = userData.password || 'N/A';
// } 
// else {
//     alert('User data not found in local storage.')
// }

function showEditCard() {
    document.getElementById('profileCard').style.display = 'none';
    document.getElementById('editCard').style.display = 'block';

    // Populate form fields with existing user data
    document.getElementById('editFirstName').value = userData.FirstName || '';
    document.getElementById('editLastName').value = userData.LastName || '';
    document.getElementById('editEmail').value = userData.email || '';
    document.getElementById('editPassword').value = userData.password || '';
    document.getElementById('profileImage2').src = userData.profileImage || '';
    document.getElementById('editImage').value = userData.profileImage || '';
}

function hideEditCard() {
    document.getElementById('profileCard').style.display = 'block';
    document.getElementById('editCard').style.display = 'none';
}

function saveChanges() {
    // Update userData with edited information
    userData.FirstName = document.getElementById('editFirstName').value;
    userData.LastName = document.getElementById('editLastName').value;
    userData.email = document.getElementById('editEmail').value;
    userData.password = document.getElementById('editPassword').value;

    if (validateName(userData.FirstName) && validateName(userData.LastName) && isValidEmail(userData.email) && isValidPassword(userData.password)) {
        // Save updated userData to local storage
        localStorage.setItem('userData', JSON.stringify(userData));
                    // Update profile card with edited information
    
        document.getElementById('profileFirstName').innerText = userData.FirstName || 'N/A';
        document.getElementById('profileLastName').innerText = userData.LastName || 'N/A';
        document.getElementById('profileEmail').innerText = userData.email || 'N/A';
        document.getElementById('profilePassword').innerText = userData.password || 'N/A';

        document.getElementById('editForm').reset();

        hideEditCard();
    }
    else{
        alert('error entry!');
    }
}

function validateName(str) {
    let regexName = /^[A-Za-z]+$/i;
    return regexName.test(str);
}
function isValidEmail(email) {
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
return emailRegex.test(email);
}
function isValidPassword(password) {
const startsWithCapital = /^[A-Z]/.test(password);
const hasTwoNumbers = /\d.*\d/.test(password);
const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
const isLengthValid = password.length >= 8 && password.length <= 32;

return startsWithCapital && hasTwoNumbers && hasSpecialCharacter && isLengthValid;
} 