let d = document.getElementById('day').value;
let m = document.getElementById('month').value;
let y = document.getElementById('year').value;
let year = document.getElementById('age-year');
let month = document.getElementById('age-month');
let day = document.getElementById('age-day');
let submitBtn = document.querySelector('#submit');
submitBtn.addEventListener("click", function(){
    let currentYear = new Date.getFullYear();
    let span = document.querySelector(".error")
    if (d > 31 || m > 12 || y > currentYear){
        span.innerHTML = "Invalide year";
        return;
    }
    const dob = new Date(y, m - 1, d);
    const diffMs = Date.now() - dob.getTime();
    const diffYears = Math.floor(diffMs / 86400000 / 365.25);
    const diffMonths = Math.floor((diffMs / 86400000 / 365.25 - diffYears) * 12);
    const diffDays = Math.floor((diffMs / 86400000) - (diffYears * 365.25) - (diffMonths * 30.44));

  // Display the age
  year.innerHTML = diffYears;
  month.innerHTML = diffMonths;
  day.innerHTML = diffDays;
});
    


