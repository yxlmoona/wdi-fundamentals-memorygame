console.log("Up and running!");
const cards =["queen", 'queen', "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User Flipped" + " " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User Flipped" + " " + cardTwo);
console.log(cardsInPlay.length);
if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
}else{
	alert("Sorry, try again");
}