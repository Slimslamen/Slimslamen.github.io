//containers
const main = document.querySelector("main"),
form = document.querySelector("#signUp"),
header = document.querySelector("header"),
//Textinnehåll
startText = document.querySelector("#startText")

const submit = (event) => {
    event.preventDefault()
//Användar namn
    const username = event.target.elements.username.value;
    localStorage.setItem("name", username)
    location.href = "game.html"
    
}

const characterSelection = () => {
    const Morty = document.querySelector("#Morty");
    const Rick = document.querySelector("#Rick");
    const EvilMorty = document.querySelector("#EvilMorty");

    Morty.addEventListener("click", () => {
        if (Morty.checked) {
            localStorage.setItem("character", "images/Morty_MV.webp");
            startText.textContent = "Morty";
        } else {
            startText.innerHTML = "<h3>No character has been chosen...</h3>";
            localStorage.removeItem("character");
        }
    });

    Rick.addEventListener("click", () => {
        if (Rick.checked) {
            localStorage.setItem("character", "images/Rick_MV.webp");
            startText.textContent = "Rick";

        } else {
            startText.innerHTML = "<h3>No character has been chosen...</h3>";
            localStorage.removeItem("character");
        }
    });

    EvilMorty.addEventListener("click", () => {
        if (EvilMorty.checked) {
            localStorage.setItem("character", "images/evil-morty.webp");
            startText.textContent = "Evil Morty";
        } else {
            startText.innerHTML = "<h3>No character has been chosen...</h3>";
            localStorage.removeItem("character");
        }
    });
};
form.addEventListener("submit", submit)

characterSelection()
