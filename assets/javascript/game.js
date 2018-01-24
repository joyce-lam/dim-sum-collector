
$(document).ready(function() {


	var targetScore;
	var counter = 0;
	var wins = 0;
	var losses= 0;


	function genTargetScore() {
		var min = 19;
		var max = 120;
		targetScore = Math.floor(Math.random()*(max - min +1))+ min;
	}


	genTargetScore()
	$("#targetscore").text(targetScore);


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


	allButtonScores();


	var imageSources = [
		"assets/images/gyoza.png",
		"assets/images/porkbun.jpg",
		"assets/images/siumai.jpg",
		"assets/images/soupdumpling.jpg"
	]; 


	for (var i = 0; i<4; i++){
		var dimsumImage = $("<img>");
		dimsumImage.addClass("dimsum-image");
		dimsumImage.attr("src", imageSources[i]);
		dimsumImage.data('dimsumvalue', buttonScores[i]);
		$("#dim-sums").append(dimsumImage);
	}


	function updateScore() {
		$("#win").text(wins);
		$("#loss").text(losses);
		$("#totalscore").text(counter);
	}


	$(".dimsum-image").on("click", function(){

		var dimsumValue = ($(this).data("dimsumvalue"));
		dimsumValue = parseInt(dimsumValue);
		counter += dimsumValue;

		if (counter === targetScore) {
			wins++;
			$("#text").text("You won!")
	    }
	    else if (counter >= targetScore) {
	    	losses++;
	    	$("#text").text("You lost!")
	    }
	    updateScore();

	});

})

