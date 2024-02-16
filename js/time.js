// таймер
let deadline = '2024-04-24';
function getTimeRemainding(endTime) {
  const t = Date.parse(deadline) - Date.parse(new Date()); //тут мілісекунди
  const days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);
  return {
    total:t,
    days,
    hours,
    minutes,
    seconds,
  }
}

function setClock(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval=setInterval(updateClock,1000)
    
    function updateClock() {
        const t = getTimeRemainding(endTime);
        days.textContent = t.days;
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;
        if (t.total <= 0) {
            clearInterval(timeInterval)
        }
    }
}
setClock('.timer', deadline);