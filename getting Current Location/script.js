const button = document.getElementById("button")
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const timer = document.getElementById("timer")
const stopButton = document.getElementById("stop-button")
// const userinput = document.getElementById("user-input")
// const timeButton = document.getElementById("time-button")

function showTime()
{
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    timer.innerText = time;
}

let interval = setInterval(showTime, 1000);

stopButton.addEventListener("click", () =>{
    clearInterval(interval);
})

// function stopWatch2()
// {
//     console.log("Timer Has Stoped!")
// }

// function stopWatch()
// {
//     const timevalue = userinput.value
//     // Convert timevalue to milliseconds
//     const timeInMilliseconds = parseInt(timevalue) * 1000;

//     // Use setTimeout to call stopWatch2 after the specified time
//     setTimeout(stopWatch2, timeInMilliseconds);
// }

timeButton.addEventListener("click",stopWatch())

async function getData(lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=e09a42935bcd4e5a80581554240309&q=${lat}, ${long}&aqi=yes`)
    return await promise.json();
}

async function getLocation(position)
{
    const result = await getData(
        position.coords.latitude, 
        position.coords.longitude)

    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = `${result.location.localtime}`
    cityTemp.innerText = `${result.current.temp_c}`
    console.log(result);
}

function FailedToGet()
{
    console.log("There was error while getting current location!");
}

button.addEventListener("click", async()=>{
    const loc = await navigator.geolocation.getCurrentPosition(getLocation, FailedToGet);
})

