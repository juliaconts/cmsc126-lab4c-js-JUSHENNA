// insert here const object Student
var student_list = {}

student_list[student.studentNumber] = student;

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

function generateStudentNumber() {
    let randomDigits = Math.floor(Math.random() * 90000) + 10000;
    studentNumber = `2023${randomDigits}`;
    return studentNumber;
}

function showError(message){
    document.getElementById("error-message").innerText = message;
}

function add_student(form){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let upMail = document.getElementById("upMail").value;
    let course = document.getElementById("course").value;

    showError("");

    //checkers
    if (!name || !age || !upMail || course === "blank") {
        showError("Please fill in all fields." + "\n"
            + "Enter a full name (first and last name)." + "\n" 
            + "Enter an age not less than 18 and not more than 99." + "\n"
            + "Enter a UP email address."
        );
        return false;
    }

    if (!upMail.includes("@up.edu.ph")) {
        showError("Must be a UP email address.");
        return false;
    }

    if (age < 18 || age > 99){
        showError("Please enter an age not less than 18 and not more than 99.");
        return false;
    }

    if (name.length < 5){
        showError("Names must be more than five (5) characters.");
        return false;
    }

    name = name.trim();
    //naming patterns
    const regex = /\s/;
    const regex2 =/^\w+(-?\w+)*( \w+(-?\w+)*)*$/;

    //checks if full name
    if (!regex.test(name)){
        showError("Please enter a full name (first and last name).");
        return false;
    }

    //checks if each word has one whitespace in between
    if (!regex2.test(name)){
        showError("Input must contain only one whitespace in between your name.");
        return false;
    }

    let genStudentNumber = generateStudentNumber();
    let exists = Object.values(student_list).find(student => student.studentNumber === genStudentNumber);

    while (exists) {
        console.log("Student number already exists");
        genStudentNumber = generateStudentNumber();
    }

    student_list[genStudentNumber] = {genStudentNumber, name, age, upMail, course};

    alert(
        "Student Added Successfully!" + "\n" +
        "Student Number: " + genStudentNumber + "\n" +
        "Name: " + name + "\n" +
        "Age: " + age + "\n" +
        "Email: " + upMail + "\n" + 
        "Course: " + course 
    );

    document.getElementById("addStudent").reset();
    return false;
}

function find_student(){
        let searchTerm = document.getElementById("studentNumber").value.trim();
    
        if (!searchTerm) {
            document.getElementById("error-find-student").textContent = "Please enter a valid number";
            document.getElementById("error-find-student").style.display = "block";
        } 
        else if (searchTerm.length != 9){
            document.getElementById("error-find-student").textContent = "The student number must contain 9 integers.";
            document.getElementById("error-find-student").style.display = "block";
        } 
        else if (!student_list[searchTerm]) {
            document.getElementById("error-find-student").textContent = "Student record does not exist";
            document.getElementById("error-find-student").style.display = "block";
        }
        else {
            document.getElementById("error-find-student").textContent = "";
            document.getElementById("error-find-student").textContent.display = "none";
        }
    
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
                            <td>${student_list[searchTerm].studentNumber || student_list[searchTerm].genStudentNumber}</td>
                            <td>${student_list[searchTerm].name}</td>
                            <td>${student_list[searchTerm].age}</td>
                            <td>${student_list[searchTerm].upMail}</td>
                            <td>${student_list[searchTerm].course}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        if (student_list[searchTerm]){
            document.getElementById("searchStudent").innerHTML = tableHTML;
        }else{
            document.getElementById("searchStudent").innerHTML = "";
        }
    }    

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
