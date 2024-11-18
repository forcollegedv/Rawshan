const imgs = document.querySelectorAll(".welcome__img")
let index = 0


setInterval(() => {
    index++
    if (index == imgs.length){
        index = 0
    }
    imgs.forEach((img,i) => {
        img.classList.remove("active")
        if (i === index){
            img.classList.add("active")
        }
    });
}, 5000);