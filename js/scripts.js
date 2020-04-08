// Business Logic --------------------------------------------
var round = 1;
var turnTotal = 0;

function GrandTotal() {
  this.player1GrandTotal = 0,
  this.player2GrandTotal = 0,
  this.playerId = 1
}

GrandTotal.prototype.updateTotal = function(turnTotal) {
  if (this.playerId === 1) {
    this.player1GrandTotal += turnTotal;
    this.switchPlayer();
  } else if (this.playerId === 2) {
    this.player2GrandTotal += turnTotal;
    round += 1;
    if (round === 4) {
      endOfGame();
    } else {
    this.switchPlayer();
    }
  }
}

GrandTotal.prototype.switchPlayer = function() {  
  if (this.playerId === 1) {
    this.playerId = 2;
    turnTotal = 0;
  } else if (this.playerId === 2) {
    this.playerId = 1;
    turnTotal = 0;
  }
}

var eachRoll = function() {
  var rollTotal = 0;
  var randomGenerator = Math.floor(Math.random() * 6) + 1;
  if (randomGenerator === 1) {
    return rollTotal = 0;
  } else {
    return randomGenerator;
  }
}

var roundTotal = function() {
 var rollResult = eachRoll();
 $(".dice").html(rollResult);
 if (rollResult === 0){
  turnTotal = 0;
  grandTotal.updateTotal(turnTotal);
  $(".dice").html(0);
  alert("hit 1"); 
  }
  else {
    turnTotal += rollResult;
    alert(turnTotal);
    $(".roll-total").html(turnTotal);
  } 
}



// User Interface Logic ------------------------------
var grandTotal = new GrandTotal();
var endOfGame = function() {
  $(".gameover").show();
  $("button#roll").hide();
  $("button#hold").hide();
  round = 0;
}
//ADD LOGIC TO REFRESH PAGE

var refreshScores = function() {
  $(".playerOneScore").html(grandTotal.player1GrandTotal);
  $(".playerTwoScore").html(grandTotal.player2GrandTotal);
  $(".round").html(round);
  $(".playerId").html(grandTotal.playerId);
}

$(document).ready(function() {
  $("button#roll").click(function() {
    roundTotal();
    refreshScores();
  })
  //Update hold in the future so two places are not updating the same variable-best practice
  $("button#hold").click(function() {  
    grandTotal.updateTotal(turnTotal);
    refreshScores();
  })
  $("button#new-game").click(function() {
    window.location.reload();
  })  
})