
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav ul li a");

    function handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute("id");
                const targetNavItem = document.querySelector(`nav ul li a[href="#${targetId}"]`);

                if (targetNavItem) {
                    navItems.forEach((item) => {
                        item.parentNode.classList.remove("active");
                    });

                    targetNavItem.parentNode.classList.add("active");
                }
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector("nav").offsetHeight,
            
        });
    }

    navItems.forEach((item) => {
        item.addEventListener("click", scrollToSection);
    });
});



//Bildspel
/* const items = document.querySelectorAll(".item")
const contents = document.querySelectorAll(".content")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const img = document.querySelector("#containerPic")
const slide = document.querySelector(".slide")

const imgArray = ["images/forest.jpg", "images/exercise.jpg", "images/reading.jpg", "images/volleyball.avif"]
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
    items.forEach(item => {
        item.classList.remove("show")
    })
    items[i].classList.add("show", "activated")

    pictures()

}
const prevPic = () => {
    i--
    if(i<0){
        i = imgArray.length - 1
    }
    img.src = imgArray[i]
    items.forEach(item => {
        item.classList.remove("show")

    })
    items[i].classList.add("show")
    pictures()
}

next.addEventListener("click", nextPic)
prev.addEventListener("click", prevPic)
 */
