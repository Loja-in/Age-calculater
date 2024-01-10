let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener("click", function() {
    let d = document.getElementById('day');
    let m = document.getElementById('month');
    let y = document.getElementById('year');
    let inputdate = document.querySelector(".input")
    let year = document.getElementById('age-year');
    let month = document.getElementById('age-month');
    let day = document.getElementById('age-day');
    let spanDay = document.querySelector('#error-day');
    let spanMonth = document.querySelector('#error-month');
    let spanYear = document.querySelector('#error-year');
    let monthValue = parseInt(m.value, 10);
    let dayValue = parseInt(d.value, 10);
    let yearValue = parseInt(y.value, 10);
    let currentYear = new Date().getFullYear();
    if (dayValue < 1 || dayValue > 31) {
        spanDay.innerHTML = "Invalide value";
        return;
    }else if (monthValue < 1 || monthValue > 12) {
        spanMonth.innerHTML = "Invalide value";
        return;
    }else if (yearValue < 1900 || yearValue > currentYear) {
        spanYear.innerHTML = "Invalide value";
        return;
    }
else{
    const dob = new Date(+y.value, +m.value - 1, +d.value);
    const diffMs = Date.now() - dob.getTime();
    const diffYears = Math.floor(diffMs / 86400000 / 365.25);
    const diffMonths = Math.floor((diffMs / 86400000 / 365.25 - diffYears) * 12);
    const diffDays = Math.floor((diffMs / 86400000) / (365.25 / 12)) % 30.44;

    // Display the age
    year.innerHTML = diffYears;
    month.innerHTML = diffMonths;
    day.innerHTML = Math.floor(diffDays);
    }
});