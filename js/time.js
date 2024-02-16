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
        days.textContent = getZero(t.days);
        hours.textContent = getZero(t.hours);
        minutes.textContent = getZero(t.minutes);
        seconds.textContent = getZero(t.seconds);
        if (t.total <= 0) {
            clearInterval(timeInterval)
        }
    }
}
setClock('.timer', deadline);

//додаю нулик від 0 до 9
function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`
  } else {
    return num;
  }
}

//відловлюю їм'я
const name = document.querySelector('#name');
//колір блоків
const timeBlocks = [...document.querySelectorAll('.timer-item')];
name.addEventListener('click', swapName);
function swapName() {
  
  if (name.textContent === "Івана") {
    name.textContent = "Мар'янки";
    name.style.color = "purple";
    deadline = '2024-11-28';
    timeBlocks.map(block => {
      block.classList.remove('timer-item');
      block.classList.add('purple')
    })
  } else {
    name.textContent = "Івана";
    name.style.color = "#2980b9";
    deadline = '2024-04-24';
    timeBlocks.map(block => {
      block.classList.remove('purple');
      block.classList.add('timer-item')
    })
  }
}