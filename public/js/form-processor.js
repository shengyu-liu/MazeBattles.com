var difficulties = ["easy", "medium", "hard", "expert"];
var difficultyIndex = 0;

$(".easier").click(function() {
	if (difficultyIndex == 0) {
		difficultyIndex = difficulties.length - 1;
	} else {
		difficultyIndex--;
	}

	changeDifficulty(difficultyIndex);
});

$(".harder").click(function() {
	console.log("harder clicked!");
	if (difficultyIndex == difficulties.length - 1) {
		difficultyIndex = 0;
	} else {
		difficultyIndex++;
	}

	changeDifficulty(difficultyIndex);
});

function changeDifficulty(difficultyIndex) {
	console.log("difficulty = " + difficulty);

	for (var i = 0; i < difficulties.length; i++) {
		var difficulty = difficulties[i];

		if (i == difficultyIndex) {
			console.log("showing " + difficulty);
			$("#" + difficulty).css({"display":"inline"});
		} else {
			console.log("hiding " + difficulty);
			$("#" + difficulty).css({"display":"none"});
		}
	}
}

$("select").change(function() {
	var option = $(this).val();

	if (option == "one-on-one") {
		$("#menu-1").css({"display":"none"});
		$("#menu-2").css({"display":"inline"});
	} 

	if (option == "single-player") {
		$("#menu-2").css({"display":"none"});
		$("#menu-1").css({"display":"inline"});
	}
});