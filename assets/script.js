const startingMinutes = 03;
let time = startingMinutes * 60;

const coundownEl = document.getElementbyId(timer);

setInterval(updateCountdown, 300);

function updateCountdown(){
    const minutes = Math.floor (time/60)
    let seconds= time %60;

    updateCountdownEl.innerHTML =`${minutes}: ${seconds}`;
    time--;
}