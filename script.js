function checkInput(){
    let input = document.querySelector(".input");
    if(input == " "){
        let span = document.querySelector("#error")
        span.innerHTML = "This field is required";
    }
    else{
        span.innerHTML = "";
    }
}
function validate() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    let valid = true;

    if(day < 1 || day > 31) {
        valid = false;
        document.getElementById('error').innerHTML = "invalid day.";
    }

    if(month < 1 || month > 12) {
        valid = false;
        document.getElementById('error').innerHTML = "invalid month.";
    }

    const currentYear = new Date().getFullYear();
    if(year < 1900 || year > currentYear) {
        valid = false;
        document.getElementById('error').innerHTML = "invalid year.";
    }

    return valid;
}












let button = document.querySelector("#submit");
button.addEventListener('submit',calcAge);