// insert here const object Student
var student_list = {}

student = {
    name: "Julia Contreras",
    studentNumber: 202350056,
    age: 20,
    upMail: "jmcontreras3@up.edu.ph",
    course: "BS Computer Repair Shop"
};

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

function add_student(form){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let upMail = document.getElementById("upMail").value;
    let course = document.getElementById("course").value;

    //CHECKERS
    if (!upMail.includes("@up.edu.ph")) {
        alert("Must be a UP email address.");
        return;
    }

    if (!name || !age || !upMail || course === "blank") {
        alert("Please fill in all fields correctly.");
        return;
    }

    let studentNumber = generateStudentNumber();
    student_list[studentNumber] = { studentNumber, name, age, upMail, course };

    document.getElementById("addStudent").reset();
    return false;
}

function find_student(){
    //code
}

function display_list() {
    let tableHTML = `
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
            <table border="1" style="width: 80%; text-align: center; border-collapse: collapse;">
                <thead>
                    <tr>
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
