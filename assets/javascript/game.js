var targetScore;
var counter;
var wins = 0;
var losses = 0;

function genTargetScore() {
	var min = 19;
	var max = 120;
	targetScore = Math.floor(Math.random()*(max - min +1))+ min;
}

function genButtonScore() {
	var min = 1;
	var max = 12;
	return Math.floor(Math.random()*(max - min +1))+ min;
}

var buttonScores = [];
function allButtonScores() {
	for (var i = 0; i<4; i++) {
		buttonScores[i] = genButtonScore();
	}
}

function setButtonScores() {
	$('.dimsum-image').each(function(index) {
		$(this).data('dimsumvalue', buttonScores[index]);
	});
}

function updateScore() {
	$("#win").text(wins);
	$("#loss").text(losses);
	$("#targetscore").text(targetScore);
	$("#totalscore").text(counter);
}

function resetGame() {
	counter = 0;
	genTargetScore();
	allButtonScores();
	setButtonScores();
	updateScore();
}


function initGame() {
	resetGame();

	$(".dimsum-image").on("click", function() {
		var dimsumValue = ($(this).data("dimsumvalue"));
		dimsumValue = parseInt(dimsumValue);
		counter += dimsumValue;

		if (counter === targetScore) {
			wins++;
			$("#text").text("You won!");
			resetGame();
	    } else if (counter >= targetScore) {
	    	losses++;
	    	$("#text").text("You lost!")
	    	resetGame();
	    } else {
		    updateScore();
		}
	});
}

$(document).ready(initGame);

