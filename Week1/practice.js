let firstCard;
let secondCard;

let sum;

const p1 = document.getElementById("message");
const p2 = document.getElementById("cards");
const p3 = document.getElementById("sum");
const start = document.getElementById("start");
const newcard = document.getElementById("newcard");


function p2change()
{
    if (firstCard === 1){
        p2.textContent = "Cards : A";
    }
    else if (firstCard === 11){
        p2.textContent = "Cards : J";
    }
    else if (firstCard === 12){
        p2.textContent = "Cards : Q";
    }
    else if (firstCard === 13){
        p2.textContent = "Cards : K";
    }
    else{
        p2.textContent = "Cards : " + firstCard;
    }
    if (secondCard === 1){
        p2.textContent += " - " + "A";
    }
    else if (secondCard === 11){
        p2.textContent += " - " + "J";
    }
    else if (secondCard === 12){
        p2.textContent += " - " + "Q";
    }
    else if (secondCard === 13){
        p2.textContent += " - " + "K";
    }
    else{
        p2.textContent += " - " + secondCard;
    }
}

function p2change2()
{
    if (secondCard === 1){
        p2.textContent += " - " + "A";
    }
    else if (secondCard === 11){
        p2.textContent += " - " + "J";
    }
    else if (secondCard === 12){
        p2.textContent += " - " + "Q";
    }
    else if (secondCard === 13){
        p2.textContent += " - " + "K";
    }
    else{
        p2.textContent += " - " + secondCard;
    }
}

function startGame()
{
    firstCard = Math.floor(Math.random() * 13) + 1;
    secondCard = Math.floor(Math.random() * 13) + 1;

    if (firstCard === 1){
        sum = 11;
    }
    else if (firstCard > 10){
        sum = 10;
    }
    else{
        sum = firstCard;
    }

    if (secondCard === 1){
        sum += 11;
    }
    else if (secondCard > 10){
        sum += 10;
    }
    else{
        sum += secondCard;
    }

    if (sum < 21){
        p1.textContent = "Do you wanna draw a new card?";
        p2change();
        p3.textContent = "Sum : " + sum;
        start.onclick = null;
        newcard.onclick = () => {func()}
    }
    else if (sum === 21){
        p1.textContent = "You won! You've got a Blackjack";
        p2change();
        p3.textContent = "Sum : " + sum;
    }
    else{
        p1.textContent = "You're out of the game";
        p2change();
        p3.textContent = "Sum : " + sum;
    }
}

function func()
{
    secondCard = Math.floor(Math.random() * 13) + 1;
    
    if (secondCard === 1){
        sum += 11;
    }
    else if (secondCard > 10){
        sum += 10;
    }
    else{
        sum += secondCard;
    }

    if (sum < 21){
        p1.textContent = "Do you wanna draw a new card?";
       p2change2();
        p3.textContent = "Sum : " + sum;
    }
    else if (sum === 21){
        p1.textContent = "You won! You've got a Blackjack";
        p2change2();
        p3.textContent = "Sum : " + sum;
        start.onclick = () => {startGame()};
        newcard.onclick = null;
    }
    else{
        p1.textContent = "You're out of the game";
        p2change2();
        p3.textContent = "Sum : " + sum;
        start.onclick = () => {startGame()};
        newcard.onclick = null;
    }
}