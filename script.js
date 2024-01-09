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
function validateInput(){
    let day
}