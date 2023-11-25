const userData = JSON.parse(sessionStorage.getItem('validUser'));
if (userData) {
    // Display user data in the profile card
    document.getElementById('profileImage').src = userData.profileImage || 'assets/img/default-profile-image.jpg';
    document.getElementById('profileName').innerText = userData.name || 'N/A';
    document.getElementById('profileEmail').innerText = userData.email || 'N/A';
    document.getElementById('profilePassword').innerText = userData.password || 'N/A';
} 
else {
    alert('User data not found in local storage.')
}

function showEditCard() {
    document.getElementById('profileCard').style.display = 'none';
    document.getElementById('editCard').style.display = 'block';

    // Populate form fields with existing user data
    document.getElementById('editName').value = userData.name || '';
    document.getElementById('editEmail').value = userData.email || '';
    document.getElementById('editPassword').value = userData.password || '';
    document.getElementById('profileImage2').src = userData.profileImage || 'assets/img/default-profile-image.jpg';
    document.getElementById('editImage').value = userData.profileImage || '';
}

function hideEditCard() {
    document.getElementById('profileCard').style.display = 'block';
    document.getElementById('editCard').style.display = 'none';
}

function saveChanges() {
    // Update userData with edited information
    userData.email = document.getElementById('editEmail').value;
    userData.password = document.getElementById('editPassword').value;
    userData.profileImage = document.getElementById('editImage').value;

    if (validateName(userData.name) && isValidEmail(userData.email) && isValidPassword(userData.password)) {
        // Save updated userData to local storage
        sessionStorage.setItem('validUser', JSON.stringify(userData));
        if (userData.role == 1) {
            localStorage.setItem('Admin', JSON.stringify(userData))
        }
        else{
            const storedTrainers = localStorage.getItem("trainers");
            const trainers = storedTrainers ? JSON.parse(storedTrainers) : [];
            const userToEdit = trainers.find(user => user.name === userData.name);
            if (userToEdit) {
                userToEdit.email = userData.email;
                userToEdit.password = userData.password;
                userToEdit.profileImage = userData.profileImage;
              } else {
                console.error("User not found for editing.");
              }
            localStorage.setItem('trainers', JSON.stringify(trainers));
        }
        

                    // Update profile card with edited information
    
        document.getElementById('profileEmail').innerText = userData.email || 'N/A';
        document.getElementById('profilePassword').innerText = userData.password || 'N/A';
        document.getElementById('profileImage').src = userData.profileImage || 'assets/img/default-profile-image.jpg';

        document.getElementById('editForm').reset();

        hideEditCard();
    }
    else{
        alert('Name only letters+email must be valid+password must contain capital,small letters,Simpol,length 6 and more');
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
const isLengthValid = password.length >= 6 ;

return startsWithCapital && hasTwoNumbers && hasSpecialCharacter && isLengthValid;
} 