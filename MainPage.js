let currentIndex = 0;
const slides = document.querySelectorAll('.img-list img');
const totalSlides = slides.length;
const buttons = document.querySelectorAll('.img-btn');
const textContents = [
    {
        title: 'Efficient Assignment Management',
        description: 'Streamline assignment tracking and grading effortlessly. Manage tasks and monitor trainee progress efficiently, ensuring seamless communication and feedback.'
    },
    {
        title: 'Seamless Attendance Recording',
        description: 'Take attendance hassle-free. Our intuitive system allows quick and accurate recording of trainees attendance, providing you with the tools to optimize training sessions.'
    },
    {
        title: 'Comprehensive Trainee Progress Tracking',
        description: 'Track and assess trainee performance comprehensively. Dive into detailed analytics to monitor growth, identify areas for improvement, and provide tailored support.'
    }
];

function slideImg(index) {
    slides[currentIndex].style.display = 'none';
    buttons[currentIndex].classList.remove('active');
    currentIndex = index;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slides[currentIndex].style.display = 'block';
    buttons[currentIndex].classList.add('active');
    
    // Update text content based on currentIndex
    document.querySelector('.text-content h2').innerText = textContents[currentIndex].title;
    document.querySelector('.text-content p').innerText = textContents[currentIndex].description;
}

function autoplay() {
    setInterval(() => {
        slideImg(currentIndex + 1);
    }, 3000);
}

// Function to handle button clicks
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        slideImg(index);
    });
});

// Start autoplay when the page loads
window.addEventListener('load', () => {
    autoplay();
    buttons[currentIndex].classList.add('active'); // Set the initial active button
    // Set initial text content
    document.querySelector('.text-content h2').innerText = textContents[currentIndex].title;
    document.querySelector('.text-content p').innerText = textContents[currentIndex].description;
});

function toggleNav() {
    var sideNav = document.querySelector(".side-nav");
    sideNav.classList.toggle("show-links");
}
// Assuming you have variables to track the solved tasks count
let solvedTasksCount = 0;

function incrementSolvedTasks() {
    // Your logic to increment the tasks count
    solvedTasksCount++;
    updateSolvedTasksDisplay();
}

function decrementSolvedTasks() {
    // Your logic to decrement the tasks count, ensuring it doesn't go below 0
    if (solvedTasksCount > 0) {
        solvedTasksCount--;
        updateSolvedTasksDisplay();
    }
}

function updateSolvedTasksDisplay() {
    // Update the content of the span with the current count
    document.getElementById('solvedTasksDisplay').textContent = solvedTasksCount;
}
let absenceCount = 0;

function incrementAbsenceCount() {
    absenceCount++;
    updateAbsenceDisplay();
}

function decrementAbsenceCount() {
    if (absenceCount > 0) {
        absenceCount--;
        updateAbsenceDisplay();
    }
}

function updateAbsenceDisplay() {
    document.getElementById('absenceDisplay').textContent = absenceCount;
}
function deleteTrainee() {
    // Logic to get the trainee data from local storage (replace with your actual key)
    let traineeData = JSON.parse(localStorage.getItem('traineeData')) || [];

    // Logic to remove the trainee data (you may use a specific ID or other criteria)
    // For example, removing the last item in the array
    traineeData.pop();

    // Update the local storage with the modified data
    localStorage.setItem('traineeData', JSON.stringify(traineeData));

    // Refresh or update the UI as needed
    // For example, you may need to re-render the table with the updated data
    // ...

    // Log a message or perform any other actions after deletion
    console.log('Trainee deleted');
}
