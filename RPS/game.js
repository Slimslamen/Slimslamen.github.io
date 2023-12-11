//container
const gameDiv = document.querySelector(".gameOn"),
secondContainer = document.createElement("div"),
//game settings
drawText = document.querySelector("#drawText"),
user = document.querySelector("#userName"),
opponent = document.querySelector("#computer"),
buttons = document.querySelectorAll(".hands")
//Poäng för spelet
let userScore = document.querySelector(".userScore")
let computerScore = document.querySelector(".computerScore")
const yourCharacter = document.querySelector(".yourCharacter")

const Morty = "images/Morty_MV.webp";
const Rick = "images/Rick_MV.webp"
const EvilMorty = "images/evil-morty.webp"


let me
let computer = "iRobot"
let computerChoice
let userResult = 0
let computerResult = 0

const gameprep = () => {
    //loop för att välja sin hand
        user.textContent = localStorage.getItem("name")
        opponent.textContent = computer
        
        const chosen = localStorage.getItem("character")
        if(chosen){
            yourCharacter.src = chosen
            if(chosen === Morty){
                yourCharacter.classList.add("mortySize")
            }else{
                yourCharacter.classList.remove("mortySize")
            }
            if(chosen === Rick){
                yourCharacter.classList.add("rickSize")
            }else{
                yourCharacter.classList.remove("rickSize")
            }
            if(chosen === EvilMorty){
                yourCharacter.classList.add("evilSize")
            }
        }
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    me = button.textContent
                    computerTurn()
                    game()
                    computerChoice.className += "chosen"
                })})
    }
    const computerTurn = () => {
        let computerOptions = ["✊", "🖐️", "✌️"]
        computerChoice = computerOptions[Math.floor(Math.random() * 3)] 
        setTimeout(() => {

        },5000)

    }
    
    
    
    const game = () => {
        computerTurn()
        console.log(computerChoice, "Computer");
        console.log(me, "me");
        if(me === "✊" && computerChoice === "✌️"){
            userResult++
            userScore.innerHTML = userResult
        }else if(me === "✌️" && computerChoice === "🖐️"){ 
            userResult++
            userScore.innerHTML = userResult
        }else if(me === "🖐️" && computerChoice === "✊"){
            userResult++
            userScore.innerHTML = userResult
        } else if(me === computerChoice){
            drawText.style.display = "block"
         setTimeout(() => {drawText.style.display = "none"}, 1500)
    
        }else{
            computerResult ++
            computerScore.innerHTML = computerResult  
        }


    }
    

gameprep()