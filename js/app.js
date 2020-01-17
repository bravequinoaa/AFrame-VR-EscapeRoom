//Start Screen
// Button
function showButton() {
	var cb = document.getElementById('showCb');
	var btn = document.getElementById('startButton');

	if (cb.checked == true) {
		btn.style.display = "inline-block";
	}	else {
		btn.style.display = "none";
	}	
}


// Start Screen
var sceneEl;
var bgm;

AFRAME.registerComponent('startup', {
	init: function() {
		var el = this.el;
		sceneEl = document.querySelector('a-scene')
		bgm = document.querySelector('#BGM');
	
		el.setAttribute('visible', 'false');
		el.addEventListener('loaded', function() {
			el.pause();
		});
	}
});


function startGame() {
	sceneEl.play();
	sceneEl.setAttribute('visible', 'true');
	sceneEl.setAttribute('embedded', 'false');
	sceneEl.enterVR();
	bgm.components.sound.playSound();
}

//End game
var clickables = document.querySelectorAll('.clickable');

function endGame() {
	for (var i = 0; i < clickable.length; i++) {
		clickables[i].classList.remove('clickable');
	}
}