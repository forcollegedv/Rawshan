document.querySelector("header").style = "opacity:0;"
document.querySelector("main").style = "opacity:0;"
document.querySelector("footer").style = "opacity:0;"

setTimeout(() => {
    document.querySelector("header").style = "opacity:1;"
    document.querySelector("main").style = "opacity:1;"
    document.querySelector("footer").style = "opacity:1;"
    document.querySelector(".loading").remove()
}, 1000);