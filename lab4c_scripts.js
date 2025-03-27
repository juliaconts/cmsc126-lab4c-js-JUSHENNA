// to show date when button is pressed
function time_now() {
    var day     = {timeZone: 'Asia/Singapore', month: 'long', day: 'numeric', year: 'numeric'};
    var weekday = {timeZone: 'Asia/Singapore', weekday:'long'};
    var time    = {timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', hour12: true};
    var date    = new Date();

    var dateFormat = date.toLocaleDateString("en-US", day) + ", " + date.toLocaleDateString("en-US", weekday);
    var timeFormat = date.toLocaleTimeString("en-US", time);

    // for the sake of confirmation, to be deleted when button is connected to function
    console.log("Today is " + dateFormat + ".");
    console.log("The current time is " + timeFormat + ".");
}


function add_student(){
    //code
}


function find_student(){
    //code
}


function display_list(){
    //code
}


// insert here const object Student