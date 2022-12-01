let player = {
    name: "Per",
    chips: 200
}
let cards = [];
let sum = 0;
let message = "";
let blackjackEl = document.getElementById("blackjack");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let isLive = false;
let hasBlackJack = false;
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $"+ player.chips;

function startGame() {
    isLive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() { 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";    
    }

    sumEl.textContent = "Sum: " + sum; 

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }else{
        message = "You're out of the game!";
        isLive = false;
    }

    blackjackEl.textContent = message;
}

 function newCard() {
    if (isLive === true && hasBlackJack === false) {
        let thirdCard = getRandom();
        cards.push(thirdCard);
        sum += thirdCard;
    
        renderGame();
    }
}

function getRandom() {
    let random = Math.floor((Math.random() * 13) + 1);

    if (random === 1) {
        return 11;
    }else if (random === 11 || random === 12 || random === 13) {
        return  10;
    }else{
        return random;
    }
}
