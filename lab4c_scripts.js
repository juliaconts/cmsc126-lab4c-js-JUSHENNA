// insert here const object Student
var student_list = {}

student = {
    name: "Julia Contreras",
    studentNumber: 202350056,
    age: 20,
    email: "jmcontreras3@up.edu.ph",
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

function add_student(){
    //code
}

function generateStudentNumber() {
    let randomDigits = Math.floor(Math.random() * 90000) + 10000;
    studentNumber = `2023${randomDigits}`;
    return studentNumber;
}
console.log(generateStudentNumber());

function find_student(){
    //code
}


function display_list(){
    let tableHTML = "<table>";

    // Create table headers
    //<th>Student Number</th>
    tableHTML += `
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

    // will iterate through each instance of student to be placed as a row
    //              <td>${student_list.sn}</td>
    Object.values(student_list).forEach(student => {
        tableHTML += `
            <tr>
                <td>${student_list.name}</td>
                <td>${student_list.age}</td>
                <td>${student_list.upMail}</td>
                <td>${student_list.course}</td>
            </tr>
        `;
    });

    tableHTML += "</tbody></table>";

    // Display the table inside the div
    document.getElementById("display_students").innerHTML = tableHTML;
}

