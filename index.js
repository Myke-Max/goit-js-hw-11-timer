
const timer = {
    start() {
        const startTime = new Date("Sep 5, 2021 15:37:20").getTime()

        console.log(startTime)

        setInterval(() => {
            const currentTime = new Date().getTime()
            console.log(currentTime)
        },1000)
    }
    
}

timer.start()


// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);