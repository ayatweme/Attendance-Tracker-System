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

  