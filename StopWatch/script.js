// Function to start the stopwatch
function startStopwatch() {
    const inputField = document.getElementById("timeInput");
    const duration = parseInt(inputField.value);

    if (isNaN(duration) || duration <= 0) {
        console.log("Please enter a valid positive number.");
        return;
    }

    let remainingTime = duration;

    // Update the timer every second
    const intervalId = setInterval(() => {
        remainingTime--;

        // Check if the timer has reached zero
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            console.log("Timer Stopped 100");
        }
    }, 1000);
}
