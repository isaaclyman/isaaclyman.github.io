// ONLOAD

window.onload = function () {
	var il = new Il();
	il.beginAnimation();
};


// CLASSES

function Il() {
	var talents = ['code', 'write', 'build', 'share', 'think', 'test', 'teach', 'learn', 'read', 'laugh', 'work', 'play'];
	var currentIndex = 0;
	
	var setNextTalent = function() {
		currentIndex = currentIndex + 1 < talents.length ? currentIndex + 1 : 0;
	};
	
	var talentElement = document.getElementById('flyup');
	
	var switchTalents = function() {
		var currentTalent = talents[currentIndex];
		setNextTalent();
		var nextTalent = talents[currentIndex];

		var commonLetters = getCommonStartingLetters(currentTalent, nextTalent);

		var numberOfDeletionFrames = currentTalent.length - commonLetters.length;
		var deletionFrames = Array.apply(null, Array(numberOfDeletionFrames)).map(function(_, ix) {
			return function() {
				talentElement.innerHTML = currentTalent.slice(0, currentTalent.length - (ix + 1));
			};
		});

		var numberOfAdditionFrames = nextTalent.length - commonLetters.length;
		var additionFrames = Array.apply(null, Array(numberOfAdditionFrames)).map(function(_, ix) {
			return function() {
				talentElement.innerHTML = nextTalent.slice(0, commonLetters.length + ix + 1);
			};
		});

		animateFrames(deletionFrames, 120, 30, function() {
			setTimeout(function() {
				animateFrames(additionFrames, 55, 25);
			}, 200);
		});
	};
	
	this.beginAnimation = function() {
		setInterval(switchTalents, 2600);
	};

	return this;
}

function getCommonStartingLetters(word1, word2) {
	var commonLetters = '';
	for (var i = 0; i < word1.length; i++) {
		if (word1[i] != word2[i]) {
			break;
		}

		commonLetters = commonLetters + word1[i];
	}
	return commonLetters;
}

function animateFrames(actions, delay, variation, onFinish) {
	if (!actions.length) {
		if (onFinish) {
			onFinish();
		}
		return;
	}

	var nextAction = actions[0];
	var actualVariation = (Math.random() * (variation * 2)) - variation;
	var totalDelay = delay + actualVariation;

	setTimeout(function () {
		nextAction();
		animateFrames(actions.slice(1), delay, variation, onFinish);
	}, totalDelay);
}
