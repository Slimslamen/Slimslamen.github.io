//Bildspel

const items = document.querySelectorAll(".item")
const contents = document.querySelectorAll(".content")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const img = document.querySelector("#containerPic")

const imgArray = ["images/HPb.webp", "images/LOTRb.jpg", "images/GOTb.jpg", "images/Duneb.jpg"]
let i = 0

const pictures = () => {
    contents.forEach(content =>{content.classList.add("hide")})
    contents[i].classList.replace("hide", "showContent")
}

const nextPic = () => {
    i++
    if(i>imgArray.length-1){
        i = 0
    }
    img.src = imgArray[i]

    items.forEach(item => {item.classList.remove("show")})
    items[i].classList.add("show")
    pictures()
    console.log("hej");
}
const prevPic = () => {
    i--
    if(i<0){
        i = imgArray.length - 1
    }
    img.src = imgArray[i]
    items.forEach(item => {item.classList.remove("show")})
    items[i].classList.add("show")
    pictures()
    console.log("hej");
}

next.addEventListener("click", nextPic)
