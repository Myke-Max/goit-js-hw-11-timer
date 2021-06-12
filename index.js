const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn:document.querySelector('[data-action="stop"]'),
    daysValue: document.querySelector('[ data-value="days"]'),
    hoursValue: document.querySelector('[data-value="hours"]'),
    minutesValue: document.querySelector('[data-value="mins"]'),
    secondsValue: document.querySelector('[data-value="secs"]'),
}




const timer = {
    
    start() {
        const startTime = new Date("Sep 5, 2021 15:00:00").getTime();
        let isActive = false;
        let myInterval = null;
        if (!isActive) {
            myInterval = setInterval(() => {
            const currentTime = new Date().getTime()
            const countdownTime = startTime - currentTime;

                const { days, hours, mins, secs } = getTimeComponents(countdownTime);
                console.log(`${days}:${hours}:${mins}:${secs}`)
        
            isActive = true
        },1000)
        }
    },
    stop() {
        clearInterval(myInterval)
    }
    
}

const updateClockFace = ({days,hours,mins,secs}) => {
    refs.daysValue.textContent = days
    refs.hoursValue.textContent = hours
    refs.minutesValue.textContent = mins
    refs.secondsValue.textContent = secs
}


//  calculation formulas

const getTimeComponents =(time) => {
    const days = addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours =addZero( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = addZero(Math.floor((time % (1000 * 60)) / 1000));
    
    return {days,hours,mins,secs}
}
// add zero to timer
const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

// Run
refs.startBtn.addEventListener('click', () => {
    timer.start()
})

refs.stopBtn.addEventListener('click', () => {
 timer.stop()
})
