// NAME PROMPT START
let userName = prompt("Lütfen isminizi girin.", "İsim")

if (userName != null) {
    document.getElementById('myName').innerHTML = userName
}
else {
    document.getElementById('myName').innerHTML = 'İsmi Lazım Değil'
}
// NAME PROMPT END

// CLOCK START
setInterval(showTime, 1000);

function showTime() {
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let day = time.getDay();

hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

if (day == 1) {
    day='Pazartesi'
}
else if (day == 2) {
    day='Salı'
}
else if (day == 3) {
    day='Çarşamba'
}
else if (day == 4) {
    day='Perşembe'
}
else if (day == 5) {
    day='Cuma'
}
else if (day == 6) {
    day='Cumartesi'
}
else if (day == 7) {
    day='Pazar'
}

document.getElementById('myClock').innerHTML = `${hour}:${min}:${sec} ${day}`
}
//CLOCK END