// ONLOAD

window.onload = initialize;

function initialize() {
	beginFlipping();
}

// VARIABLES

var il = {
	talents: ['code', 'test', 'write', 'think', 'learn', 'hike', 'run', 'win', 'improve']
};

var flipper = {
	talentEl: document.getElementById('fly-up'),
	flipTalents: function() {

	},
	waitThen: function(delay, fn) {
		
	}
};

// FUNCTIONS

function beginFlipping() {

}


// TOOLBELT

function waitThen(delay, function) {

}

function hasClass(element, class) {
	return element.className.match();
}

function addClass(element, class) {
	element.className += ' ' + class;
}

function removeClass(element, class) {
	var classRegExp = new RegExp('(?:^|\s)' + class + '(?!\S)', 'g');
	element.className = element.className.replace(classRegExp, '');
}