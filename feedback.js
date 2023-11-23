document.addEventListener('DOMContentLoaded', function() {
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const feedbackForm = document.getElementById('feedbackForm');
    const createTrainerBtn = document.getElementById('createTrainerBtn');
    const tableBody = document.querySelector('#feedbackTable tbody');

    toggleFormBtn.style.cursor = 'pointer';
    createTrainerBtn.style.cursor = 'pointer';
  
    let showForm = false;
  
    toggleFormBtn.addEventListener('click', function() {
      showForm = !showForm;
      feedbackForm.style.display = showForm ? 'block' : 'none';
    });
  
    function populateTable() {
        const feedbacks = JSON.parse(localStorage.getItem('Feedback')) || [];
        tableBody.innerHTML = '';
        feedbacks.forEach(feedback => {
          const newRow = tableBody.insertRow();
          const evaluatorCell = newRow.insertCell();
          const traineeCell = newRow.insertCell();
          const feedbackCell = newRow.insertCell();
          const deleteCell = newRow.insertCell();
      
          evaluatorCell.textContent = feedback.Evaluator;
          traineeCell.textContent = feedback.Trainee;
          feedbackCell.textContent = feedback.Feedback;
      
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
          let feedbacks = JSON.parse(localStorage.getItem('Feedback')) || [];
          feedbacks.splice(index, 1);
          localStorage.setItem('Feedback', JSON.stringify(feedbacks));
          populateTable(); // Update table after deletion
        }
      });
      
    createTrainerBtn.addEventListener('click', function() {
        const evaluator = document.getElementById('EvaluatorInput').value.trim();
        const trainee = document.getElementById('TraineeInput').value.trim();
        const feedbackText = document.getElementById('FeedbackInput').value.trim();
  
      const nameRegex = /^[a-zA-Z\s]+$/;
      //const emailRegex = /\S+@\S+\.\S+/;
  
      let valid = true;
      let errors = [];
  
      if (!evaluator || !trainee || !feedbackText) {
        errors.push("Please fill in all fields.");
        valid = false;
      }
  
      if (!nameRegex.test(evaluator)) {
        errors.push("Name should contain only letters.");
        valid = false; 
      }
  
      /*if (!emailRegex.test(email)) {
        errors.push("Email should be in a valid format.");
        valid = false;
      }*/
  
      if (!valid) {
        alert(errors.join('\n'));
      } else {
        // Save data to local storage
        const feedback = { Evaluator: evaluator, Trainee: trainee, Feedback: feedbackText };
        const feedbacks = JSON.parse(localStorage.getItem('Feedback')) || [];
        feedbacks.push(feedback);
        localStorage.setItem('Feedback', JSON.stringify(feedbacks));
  
        // Update table
        populateTable();
        resetForm();
      }
    });
  
    // Function to reset form fields
    function resetForm() {
        document.getElementById('EvaluatorInput').value = '';
        document.getElementById('TraineeInput').value = '';
        document.getElementById('FeedbackInput').value = '';
    }
  });
  
