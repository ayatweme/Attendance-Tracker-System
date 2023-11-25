document.getElementById("addStudentBtn").addEventListener("click", function() {
    var addStudentContainer = document.getElementById("addStudentContainer");

    if (addStudentContainer.innerHTML === "") {

        var studentNameField = document.createElement("input");
        studentNameField.setAttribute("type", "text");
        studentNameField.setAttribute("placeholder", "Trainee Name");
        studentNameField.style.width = "40%";
        studentNameField.style.height = "40px";
        studentNameField.style.marginLeft = "25px";

        var studentIDField = document.createElement("input");
        studentIDField.setAttribute("type", "number");
        studentIDField.setAttribute("placeholder", "Trainee ID");
        studentIDField.style.width = "40%";
        studentIDField.style.height = "40px";
        studentIDField.style.marginLeft = "10px";
        studentIDField.style.marginRight = "10px";
        studentIDField.style.marginLeft = "25px";

        addStudentContainer.appendChild(studentNameField);
        addStudentContainer.appendChild(studentIDField);

        var saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.style.width = "88.8%";
        saveButton.style.height = "40px";
        saveButton.style.marginTop = "20px";
        saveButton.style.marginLeft = "24px";
        saveButton.addEventListener("click", function() {
    
            var enteredName = studentNameField.value.trim();
            var enteredID = parseInt(studentIDField.value);

            if (!isNaN(enteredID) && enteredID >= 0  && enteredName !== '') {
                // Create student object
                var studentData = {
                    id: enteredID,
                    name: enteredName,
                    solvedTasks: 0,
                    totalTasks: 0,
                    absence: 0
                };

                var students = JSON.parse(localStorage.getItem('students')) || [];
                students.push(studentData);
                localStorage.setItem('students', JSON.stringify(students));
                addStudentContainer.innerHTML = "";
                refreshTable();
            } else {
                alert("Please enter a valid student name and non-negative ID.");
            }
        });
        addStudentContainer.appendChild(saveButton);

        feedbackContainer.innerHTML = "";
    } else {
        addStudentContainer.innerHTML = "";
    }
});

function decrementTotalTasks() {
    var students = JSON.parse(localStorage.getItem('students')) || [];

    students.forEach(student => {
        if (student.totalTasks > 0) {
            student.totalTasks--;
            if (student.solvedTasks > student.totalTasks) {
                student.solvedTasks = student.totalTasks;
            }
        }
    });

    localStorage.setItem('students', JSON.stringify(students));
    refreshTable();
}

function incrementTotalTasks() {
    var students = JSON.parse(localStorage.getItem('students')) || [];

    students.forEach(student => {
        student.totalTasks++;
    });

    localStorage.setItem('students', JSON.stringify(students));
    refreshTable();
}

function decrementAbsenceCount(studentID) {
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var studentIndex = students.findIndex(student => student.id === studentID);

    if (studentIndex !== -1 && students[studentIndex].absence > 0) {
        students[studentIndex].absence--;
        localStorage.setItem('students', JSON.stringify(students));
        refreshTable();
    }
}

function incrementAbsenceCount(studentID) {
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var studentIndex = students.findIndex(student => student.id === studentID);

    if (studentIndex !== -1) {
        students[studentIndex].absence++;
        localStorage.setItem('students', JSON.stringify(students));
        refreshTable();
    }
}

function decrementSolvedTasks(studentID) {
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var studentIndex = students.findIndex(student => student.id === studentID);

    if (studentIndex !== -1 && students[studentIndex].solvedTasks > 0) {
        students[studentIndex].solvedTasks--;
        localStorage.setItem('students', JSON.stringify(students));
        refreshTable();
    }
}

function incrementSolvedTasks(studentID) {
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var studentIndex = students.findIndex(student => student.id === studentID);

    if (studentIndex !== -1 && students[studentIndex].solvedTasks < students[studentIndex].totalTasks) {
        students[studentIndex].solvedTasks++;
        localStorage.setItem('students', JSON.stringify(students));
        refreshTable();
    }
}

function deleteTrainee(row, studentID) {
  
    row.parentNode.removeChild(row);
    var students = JSON.parse(localStorage.getItem('students')) || [];
    var index = students.findIndex(function(student) {
        return student.id === studentID;
    });

    if (index !== -1) {
        students.splice(index, 1);

        localStorage.setItem('students', JSON.stringify(students));
    }
}

function refreshTable() {
    var tableBody = document.querySelector('.trainee-table tbody');

    tableBody.innerHTML = "";

    // Retrieve students from local storage
    var students = JSON.parse(localStorage.getItem('students')) || [];

    students.forEach(function(student) {
        var newRow = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = student.id;
        newRow.appendChild(idCell);

        var nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        newRow.appendChild(nameCell);

        var solvedTasksCell = document.createElement("td");
        solvedTasksCell.innerHTML = `
                                        <button class="btn" 
                                        onclick="decrementSolvedTasks(${student.id})
                                        ">-</button>
                                        <span>${student.solvedTasks}</span>
                                        <button class="btn" 
                                        onclick="incrementSolvedTasks(${student.id})
                                        ">+</button>
                                    `;
        newRow.appendChild(solvedTasksCell);
        var totalTasksCell = document.createElement("td");
        totalTasksCell.innerHTML = `
                                        <button class="btn" 
                                        onclick="decrementTotalTasks()">-</button>
                                        <span>${student.totalTasks}</span>
                                        <button class="btn" 
                                        onclick="incrementTotalTasks()">+</button>
                                    `;
        newRow.appendChild(totalTasksCell);
        var absenceCell = document.createElement("td");
        absenceCell.innerHTML = `
                                    <button class="btn" 
                                    onclick="decrementAbsenceCount(${student.id})
                                    ">-</button>
                                    <span>${student.absence}</span>
                                    <button class="btn" 
                                    onclick="incrementAbsenceCount(${student.id})
                                    ">+</button>
                                `;

        newRow.appendChild(absenceCell);

        var deleteCell = document.createElement("td");
        deleteCell.innerHTML = '<i class="fas fa-trash delete-btn trash-icon" style="color:#2980b9"></i>';
        newRow.appendChild(deleteCell);

        deleteCell.querySelector('.delete-btn').addEventListener('click', function(event) {
            var row = event.target.closest('tr');
            var studentID = parseInt(row.querySelector('td:first-child').textContent);

            deleteTrainee(row, studentID);
        });

        tableBody.appendChild(newRow);
    });
}
refreshTable();
function permissions() {
    const validUser = JSON.parse(sessionStorage.getItem('validUser'));
    if (validUser && validUser.role === 1) {
        let btns = document.getElementsByClassName('btn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.display = "none";
        }
    }
}

permissions();
