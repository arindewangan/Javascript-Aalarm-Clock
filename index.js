console.log("started");
let audio = new Audio('Uff_X_What _Makes You_Beautiful.mp3');
let date = document.getElementById('date');
let time = document.getElementById('time');
let currentTime = new Date();
let alarmTime = new Date(date.value + " " + time.value);
let alarm = (alarmTime.getTime() - currentTime.getTime());
let addAlarm = document.getElementById('addAlarm');
addAlarm.addEventListener("click", () => {
    alarmTime = new Date(date.value + " " + time.value);
    alarm = (alarmTime.getTime() - currentTime.getTime());
    let alarmText = alarmTime.getDate() + "-" + alarmTime.getMonth() + "-" + alarmTime.getFullYear() + " " + alarmTime.getHours() + ":" + alarmTime.getMinutes();
    console.log("Alarm in " + (alarm / 60000).toFixed(1) + " Minutes");
});

function runAlarm(time) {
    setTimeout(() => {
        console.log('Alarm Tuning')
        audio.play();
        $('#Modal').modal('show');
    }, time);
}

function displayTime() {
    let now = new Date();
    let cdate = now.getDate();
    let cmonth = now.getMonth();
    let cyear = now.getFullYear();
    if (cdate < 10) { cdate = "0" + cdate };
    if (cmonth < 10) { cmonth = "0" + cmonth };
    let ccal = "Current Date: " + cdate + "-" + cmonth + "-" + cyear;
    let chour = now.getHours();
    let cmin = now.getMinutes();
    let csec = now.getSeconds();
    if (csec < 10) { csec = "0" + csec };
    if (cmin < 10) { cmin = "0" + cmin };
    if (chour < 12) { apm = "am" } else { apm = "pm" };
    if (chour > 12) { chour = chour - 12 };
    if (chour < 10) { chour = "0" + chour };
    let ctime = "Current Time: " + chour + ":" + cmin + ":" + csec + " " + apm;
    let clock = document.getElementById('clock');
    clock.innerText = (ccal + " " + ctime);
};


let alarmStop = document.getElementById('alarmStop');
let alarmSnooze = document.getElementById('alarmSnooze');

alarmStop.addEventListener("click", () => {
    audio.pause();
    audio.load();
});

alarmSnooze.addEventListener("click", () => {
    audio.pause();
    audio.load();
    runAlarm(180000); // 3 Minutes
    console.log("Alarm Snoozed for 3 Minutes");
});