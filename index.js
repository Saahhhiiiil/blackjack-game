let player = {
    name : "Bhanu",
    chips : 150
}
let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""


let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") 
// query selector automatically reciognises an element nature, either it is a class or ID 
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name+": $"+ player.chips

function renderGame() {

    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        // console.log("less than 20");
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
        // console.log("out than 20");
    }
    messageEl.textContent = message
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13 + 1)

    if (randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        // console.log(card);
        sum += card
        // console.log(sum);
        cards.push(card)
        // console.log(cards);
        renderGame() 
    } 
}