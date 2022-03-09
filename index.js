
let sum = 0
let cards = []
let hasBlackJact = false
let messageEl = document.getElementById('message-el') 
let isAlive = false
let message = ""
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')

let player = {
    name: "Vedang",
    chips: 145
}

let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + " : $" + player.chips


function randomNumberGnerator (min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let randomNumber  = Math.floor((Math.random() * ( max - min + 1)) + min)
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}


function startgame() {
    for(let i=0;i<2;i++){
        cards.push(randomNumberGnerator(2,11))
        sum += cards[i]
    }
    isAlive = true 
    rendergame()
}

function rendergame(){

    cardEl.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
       message = "Draw more card"
    }
    else if (sum === 21) {
        message = " Player has won!!"
        hasBlackJact = true
    }
    
    else{
        message = " Player is out !!"
        isAlive = false
        hasBlackJact = false
        cards = []
        sum = 0
    }
    messageEl.textContent = message
    
}

function newCard(){
    if (isAlive === true && hasBlackJact === false){
        let nextCard = randomNumberGnerator(2,11)
        cards.push(nextCard)
        for( let i = 0 ; i<cards.length; i++){
            cardEl.textContent += cards[i] + " " 
        }
        sum += nextCard
        rendergame()
    }
    
}