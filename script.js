const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondsEl = document.querySelector('.seconds');

function updateClock() {
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const secondsDeg = (seconds / 60) * 360;
    secondsEl.style.transform = `rotate(${secondsDeg}deg)`;
}

updateClock();