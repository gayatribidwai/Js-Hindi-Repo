const input = document.getElementById("input-name");
const button = document.getElementById("click-button")
const username = document.getElementById("username")

button.addEventListener("click", () =>{
    const value = input.value;
    localStorage.setItem('name', value);
    location.reload();
})

window.addEventListener("load", ()=>{
    const value = localStorage.getItem('name');
    username.innerText = value;
})