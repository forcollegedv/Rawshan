const button = document.querySelector("#burger-menu");
const nav = document.querySelector("nav")
button.onclick = ()=>{
    button.classList.toggle("active")
    nav.classList.toggle("active")
}