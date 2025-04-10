function Student(name, studentNumber, age, upMail, course){
    this.name = name;
    this.studentNumber = studentNumber;
    this.age = age;
    this.upMail = upMail;
    this.course = course;
}

var student_list = {}

student_list[202350056] = new Student("Julia Contreras", 202350056, 20,"jmcontreras3@up.edu.ph", "BS Computer Repair Shop");
student_list[202309989] = new Student("Nina Del Rosario", 202309989, 19,"nedelrosario@up.edu.ph", "BA Food Appreciation");
student_list[202300102] = new Student("Hansen Quindao", 202300102, 20, "hcquindao1@up.edu.ph", "BS Installing and Downloading");

// to show date when button is pressed
function time_now() {
    var day     = {timeZone: 'Asia/Singapore', month: 'long', day: 'numeric', year: 'numeric'};
    var weekday = {timeZone: 'Asia/Singapore', weekday:'long'};
    var time    = {timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', hour12: true};
    var date    = new Date();

    var dateFormat = date.toLocaleDateString("en-US", day) + ", " + date.toLocaleDateString("en-US", weekday);
    var timeFormat = date.toLocaleTimeString("en-US", time);

    // for the sake of confirmation in console
    //console.log("Today is " + dateFormat + ".");
    //console.log("The current time is " + timeFormat + ".");

    document.getElementById("timeDisplay").innerHTML = `Today is ${dateFormat}.<br>The current time is ${timeFormat}.`;
}

// generation of student number
function generateStudentNumber() {
    let randomDigits = Math.floor(Math.random() * 90000) + 10000;
    studentNumber = `2023${randomDigits}`;
    return studentNumber;
}

// error message for checkers used in add_student
function showError(inputId, message){
    document.getElementById("error-" + inputId).innerText = message;
}

function clearErrors(){
    showError("name", "");
    showError("age", "");
    showError("upMail", "");
}

function add_student(form){
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value, 10);
    let upMail = document.getElementById("upMail").value;
    let course = document.getElementById("course").value;

    clearErrors();

    let hasError = false;

    //checker for name length
    if (name.length < 5){
        showError("name", "Names must be more than five (5) characters.");
        hasError = true;
    }

    //checker for name
    name = name.trim();
    //naming patterns
    const regex = /\s/;
    const regex2 =/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+(-?[a-zA-ZñÑáéíóúÁÉÍÓÚ]+)*( [a-zA-ZñÑáéíóúÁÉÍÓÚ]+(-?[a-zA-ZñÑáéíóúÁÉÍÓÚ]+)*)*$/;

    //checker for full name
    if (!regex.test(name)){
        showError("name", "Please enter a full name (first and last name).");
        hasError = true;
    }

    //checker for if each word has one whitespace in between
    if (!regex2.test(name)){
        showError("name", "Input must contain at least one whitespace in between your name.");
        hasError = true;
    }

    //checker for age
    if (age < 18 || age > 99){
        showError("age", "Please enter an age not less than 18 and not more than 99");
        hasError = true;
    }

    //checker for email
    if (!upMail.includes("@up.edu.ph")) {
        showError("upMail", "Must be a UP email address.");
        hasError = true;
    }

    if (hasError) return false;

    //generation of student number
    let genStudentNumber = generateStudentNumber();
    let exists = Object.values(student_list).find(student => student.studentNumber === genStudentNumber);

    //checker for studentNumber duplicates
    while (exists) {
        console.log("Student number already exists");
        genStudentNumber = generateStudentNumber();
    }

    //adding of object in student_list array
    studentNumber = parseInt(genStudentNumber, 10);
    let addedStudent = new Student(name, studentNumber, age, upMail, course);
    student_list[addedStudent.studentNumber] = addedStudent;

    alert(
        "Student Added Successfully!" + "\n" +
        "Student Number: " + addedStudent.studentNumber + "\n" +
        "Name: " + addedStudent.name + "\n" +
        "Age: " + addedStudent.age + "\n" +
        "Email: " + addedStudent.upMail + "\n" + 
        "Course: " + addedStudent.course 
    );

    //resets inputs to clear
    document.getElementById("addStudent").reset();
    clearErrors();
    return false;
}

// student searching
function find_student(){
        let searchTerm = document.getElementById("studentNumber").value.trim();

        //checker for no input
        if (!searchTerm) {
            document.getElementById("error-find-student").textContent = "Please enter a valid number";
            document.getElementById("error-find-student").style.display = "block";
        } 
        //checker for valid student number length
        else if (searchTerm.length != 9){
            document.getElementById("error-find-student").textContent = "The student number must contain 9 integers.";
            document.getElementById("error-find-student").style.display = "block";
        } 
        //checker for existing student number
        else if (!student_list[searchTerm]) {
            document.getElementById("error-find-student").textContent = "Student record does not exist";
            document.getElementById("error-find-student").style.display = "block";
        }
        else {
            document.getElementById("error-find-student").textContent = "";
            document.getElementById("error-find-student").textContent.display = "none";
        }

        //displaying of table
        if (!student_list[searchTerm]){
            document.getElementById("searchStudent").innerHTML = "";
        }
        else {
            let tableHTML = `
                <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                    <table border="1" style="width: 80%; text-align: center; border-collapse: collapse;">
                        <thead>
                            <tr>
                                <th>Student Number</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>UP Email</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${student_list[searchTerm].studentNumber}</td>
                                <td>${student_list[searchTerm].name}</td>
                                <td>${student_list[searchTerm].age}</td>
                                <td>${student_list[searchTerm].upMail}</td>
                                <td>${student_list[searchTerm].course}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
            document.getElementById("searchStudent").innerHTML = tableHTML;
        }
    }    

//displaying of database
function display_list() {
    let tableHTML = `
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
            <table border="1" style="width: 80%; text-align: center; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th>Student Number</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>UP Email</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Loop through student_list and display each student in the table
    Object.values(student_list).forEach(student => {
        tableHTML += `
            <tr>
                <td>${student.genStudentNumber || student.studentNumber}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.upMail}</td>
                <td>${student.course}</td>
            </tr>
        `;
    });

    tableHTML += `
                </tbody>
            </table>
        </div>
    `;

    // Display the table inside the div
    document.getElementById("displayStudents").innerHTML = tableHTML;

    console.log(student_list);
}