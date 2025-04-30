// ONLOAD

window.onload = function () {
	var il = new Il();
	il.beginAnimation();
};


// CLASSES

function Il() {
	var talents = [{
		label: 'books',
		href: 'https://leanpub.com/firstyearincode'
	},{
		label: 'apps',
		href: 'https://isaaclyman.com/bookoscope/'
	},{
		label: 'posts',
		href: 'https://isaaclyman.com/blog/posts/laws/'
	},{
		label: 'plugins',
		href: 'https://github.com/isaaclyman/novel-word-count-obsidian'
	},{
		label: 'essays',
		href: 'https://stackoverflow.blog/2023/05/01/ai-isnt-the-app-its-the-ui/'
	},{
		label: 'tools',
		href: 'https://github.com/isaaclyman/PhotoShoop'
	},{
		label: 'games',
		href: 'https://sootly.isaaclyman.com/'
	},{
		label: 'guides',
		href: 'https://rpg.freakinheck.party/'
	}]
	var currentIndex = 0;
	
	var setNextTalent = function() {
		currentIndex = currentIndex + 1 < talents.length ? currentIndex + 1 : 0;
	};
	
	var talentElement = document.getElementById('flyup');
	
	var switchTalents = function() {
		var currentTalent = talents[currentIndex].label;
		setNextTalent();
		var nextTalent = talents[currentIndex].label;
		var nextHref = talents[currentIndex].href;

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
			talentElement.href = nextHref;
			
			setTimeout(function() {
				animateFrames(additionFrames, 55, 25);
			}, 200);
		});
	};
	
	this.beginAnimation = function() {
		setTimeout(() => {
			switchTalents();
			setInterval(() => {
				if (document.visibilityState === 'visible') {
					switchTalents();
				}
			}, 2600);
		}, 1300);
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
