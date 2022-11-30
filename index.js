let firstCard = 4;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let message = "";
let blackjackEl = document.getElementById("blackjack");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
    renderGame();
}

function renderGame() { 



    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";    
        sumEl.textContent = "Sum: " + sum; 
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21){
        message = "You've got Blackjack!";
    }else{
        message = "You're out of the game!";
    }

    blackjackEl.textContent = message;
    
}

 function newCard() {
    let thirdCard = 6;
    cards.push(thirdCard);
    sum += thirdCard;

    renderGame();
}

