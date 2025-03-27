// insert here const object Student
var student_list = {}



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

function add_student(form){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let upMail = document.getElementById("upMail").value;
    let course = document.getElementById("course").value;

    if (!upMail.includes("@up.edu.ph")) {
        alert("Must be a UP email address.");
        return;
    }

    if (!name || !age || !upMail || course === "blank") {
        alert("Please fill in all fields correctly.");
        return;
    }

    // insert function for creating student id via Julia
    // note to shen: chenge [name] to studentID    
    student_list[name] = { name, age, upMail, course };

    document.getElementById("addStudent").reset();
    return false;
}


function find_student(){
    //code
}


function display_list(){
    // currently being done by nina
    console.log(student_list);
}

