const locations = document.querySelectorAll("section.times div")

const updateTimes = function () {
    locations.forEach(location => {
        const output = location.querySelector("output")
        const timezone = location.getAttribute("data-timezone")
    
        const now = luxon.DateTime.now().setZone(timezone)
    
        output.innerHTML = now.toFormat("HH:mm:ss")
        // output.innerHTML = now.toFormat("HH:mm:ss") my time version

        const hour = now.toFormat("H")

        if (hour >= 8 && hour < 18) {
            location.classList.add("open")
        }
    })
}

updateTimes();

// setInterval(function () {
//     updateTimes()
// }, 10000)

setInterval(updateTimes, 1000)

