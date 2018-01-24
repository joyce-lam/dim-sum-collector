

function genTargetScore() {
	var min = 19;
	var max = 120;
	return Math.floor(Math.random()*(max - min +1))+ min;
}

//console.log(genTargetScore());
$("#targetscore").text(genTargetScore());



function genButtonScore() {
	var min = 1;
	var max = 12;
	return Math.floor(Math.random()*(max - min +1))+ min;
}

console.log(genButtonScore());
