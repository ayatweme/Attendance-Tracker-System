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