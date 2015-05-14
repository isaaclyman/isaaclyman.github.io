// ONLOAD

window.onload = function () {
	flipper.beginFlying();
};

// OBJECTS

var il = {
	talents: ['code', 'test', 'write', 'improve', 'think', 'learn', 'hike', 'run', 'laugh', 'work', 'impress'],
	currentIndex: 0,
	currentTalent: function() {
		return this.talents[this.currentIndex];
	},
	nextTalent: function() {
		this.currentIndex = this.currentIndex + 1 < this.talents.length ? this.currentIndex + 1 : 0;
	}
};

var flipper = {
	talentEl: null,
	beginFlying: function() {
		setInterval(this.flyTalents, 1000);
	},
	flyTalents: function() {
		var talentEl = document.getElementById('flyup');
		flyUp(talentEl, 50, 500);
		// il.nextTalent();
		talentEl.innerText = il.currentTalent();
		// flyIn(talentEl, 50, 100);
	}
};


// TOOLBELT

function flyUp(element, amount, timeout) {
	console.log('add');
	var moving = setInterval(function () {
		moveUp(element, amount / 50);
	}, timeout / 50);
	// setTimeout(function () {
	// 	clearInterval(moving);
	// 	console.log('clear');
	// }, timeout);
}

function flyIn(element, amount, timeout) {
	element.style.top = parseInt(element.style.height) * 2 + 'px';
	flyUp(element, amount, timeout);
}

function moveUp(element, pixels) {
	element.style.top = parseInt(element.style.top) - pixels + 'px';
}
