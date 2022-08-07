// x is for player 1

var x = Math.round((Math.random()*5)+1);
console.log(x);

// Y is For Player2
var y = Math.round((Math.random()*5)+1);
console.log(y);

if(x === 1){
  document.getElementById('player1Dice').style.backgroundImage = "url('images/dice1.png')";
}else if(x === 2){
  document.getElementById('player1Dice').style.backgroundImage = "url('images/dice2.png')";

}else if(x === 3){
  document.getElementById('player1Dice').style.backgroundImage = "url('images/dice3.png')";

}else if(x === 4){
  document.getElementById('player1Dice').style.backgroundImage = "url('images/dice4.png')";

}else if(x === 5){
  document.getElementById('player1Dice').style.backgroundImage = "url('images/dice5.png')";

}else {
  document.getElementById('player1Dice').style.backgroundImage = "url('images/dice6.png')";
}


if(y === 1){
document.getElementById('player2Dice').style.backgroundImage = "url('images/dice1.png')";
}else if(y === 2){
  document.getElementById('player2Dice').style.backgroundImage = "url('images/dice2.png')";

}else if(y === 3){
  document.getElementById('player2Dice').style.backgroundImage = "url('images/dice3.png')";

}else if(y === 4){
  document.getElementById('player2Dice').style.backgroundImage = "url('images/dice4.png')";

}else if(y === 5){
  document.getElementById('player2Dice').style.backgroundImage = "url('images/dice5.png')";

}else {
  document.getElementById('player2Dice').style.backgroundImage = "url('images/dice6.png')";
}


var finalResult = document.getElementById('result').innerHtml;
if(x>y){
document.getElementById('result').innerHTML='Player 1 wins';
document.getElementById('result').style.color='#990000';
}else if(y>x){
  document.getElementById('result').innerHTML='Player 2 wins';
  document.getElementById('result').style.color='#990000';

}else{
  document.getElementById('result').innerHTML='Draw';
  document.getElementById('result').style.color='#990000';

}
