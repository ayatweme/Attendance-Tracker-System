document.addEventListener('DOMContentLoaded', function() {
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const trainerForm = document.getElementById('trainerForm');
    const createTrainerBtn = document.getElementById('createTrainerBtn');
    const tableBody = document.querySelector('#trainersTable tbody');

    toggleFormBtn.style.cursor = 'pointer';
    createTrainerBtn.style.cursor = 'pointer';
  
    let showForm = false;
  
    toggleFormBtn.addEventListener('click', function() {
      showForm = !showForm;
      trainerForm.style.display = showForm ? 'block' : 'none';
    });
  
    function populateTable() {
        const trainers = JSON.parse(localStorage.getItem('trainers')) || [];
        tableBody.innerHTML = '';
        trainers.forEach(trainer => {
          const newRow = tableBody.insertRow();
          const nameCell = newRow.insertCell();
          const emailCell = newRow.insertCell();
          const passwordCell = newRow.insertCell();
          const deleteCell = newRow.insertCell();
      
          nameCell.textContent = trainer.name;
          emailCell.textContent = trainer.email;
          passwordCell.textContent = trainer.password;
      
          const deleteIcon = document.createElement("i");
          deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
          deleteIcon.style.color = '#2980b9';
          deleteIcon.style.cursor = 'pointer';
      
          deleteCell.appendChild(deleteIcon);
        });
      }
      
      populateTable();
      
      // Delete trainer from local storage and update table
      tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-icon')) {
          const row = event.target.parentNode.parentNode;
          const index = row.rowIndex - 1;
          let trainers = JSON.parse(localStorage.getItem('trainers')) || [];
          trainers.splice(index, 1);
          localStorage.setItem('trainers', JSON.stringify(trainers));
          populateTable(); // Update table after deletion
        }
      });
      
    createTrainerBtn.addEventListener('click', function() {
      const name = document.getElementById('nameInput').value.trim();
      const email = document.getElementById('emailInput').value.trim();
      const password = document.getElementById('passwordInput').value.trim();
  
      const nameRegex = /^[a-zA-Z\s]+$/;
      const emailRegex = /\S+@\S+\.\S+/;
  
      let valid = true;
      let errors = [];
  
      if (!name || !email || !password) {
        errors.push("Please fill in all fields.");
        valid = false;
      }
  
      if (!nameRegex.test(name)) {
        errors.push("Name should contain only letters.");
        valid = false;
      }
  
      if (!emailRegex.test(email)) {
        errors.push("Email should be in a valid format.");
        valid = false;
      }
  
      if (!valid) {
        alert(errors.join('\n'));
      } else {
        // Save data to local storage
        const trainer = { name, email, password };
        const trainers = JSON.parse(localStorage.getItem('trainers')) || [];
        trainers.push(trainer);
        localStorage.setItem('trainers', JSON.stringify(trainers));
  
        // Update table
        populateTable();
        resetForm();
      }
    });
  
    // Function to reset form fields
    function resetForm() {
      document.getElementById('nameInput').value = '';
      document.getElementById('emailInput').value = '';
      document.getElementById('passwordInput').value = '';
    }
  });
  