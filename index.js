const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    daysValue: document.querySelector('[ data-value="days"]'),
    hoursValue: document.querySelector('[data-value="hours"]'),
    minutesValue: document.querySelector('[data-value="mins"]'),
    secondsValue: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ clockFace, targetDate }) {
        this.isActive = false,
            this.myInterval = null,
            this.clockFace = clockFace
        this.targetDate = targetDate
        this.initialTime()
    }

    initialTime() {
        const time = this.getTimeComponents(0);
        this.clockFace(time)
    }
    start() {

        if (!this.isActive) {
            this.myInterval = setInterval(() => {
                const currentTime = new Date().getTime()
                const countdownTime = this.targetDate - currentTime;

                const time = this.getTimeComponents(countdownTime);

                this.clockFace(time)
                this.isActive = true
            }, 1000)
        }
    }
    stop() {
            clearInterval(this.myInterval)
        this.isActive = false
        const time = this.getTimeComponents(0);
        this.clockFace(time)
        }
        //  calculation formulas

    getTimeComponents(time) {
            const days = this.addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.addZero(Math.floor((time % (1000 * 60)) / 1000));

            return { days, hours, mins, secs }
        }
        // add zero to timer
    addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n
    }
}

const timer = new CountdownTimer({
    targetDate: new Date('Jul 17, 2021'),
    clockFace: updateClockFace,
});


function updateClockFace({ days, hours, mins, secs }) {
    refs.daysValue.textContent = days
    refs.hoursValue.textContent = hours
    refs.minutesValue.textContent = mins
    refs.secondsValue.textContent = secs
}
function onBgImgChange() {
    let today = new Date()
   let hour = today.getHours()
    
    if (hour <= 12) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')"
         document.body.style.color = '	#bfff00'
        
        
    } else if (hour <= 22) {
        document.body.style.backgroundImage = "url('./img/evening.jpg')"
        document.body.style.color = '#B0E0E6'
        
        
    } else {
        document.body.style.backgroundImage = "url('./img/night.jpg')"

        document.body.style.color = '#fff'
       
    }
}



// Run
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.startBtn.addEventListener('click',onBgImgChange)

refs.stopBtn.addEventListener('click', timer.stop.bind(timer))