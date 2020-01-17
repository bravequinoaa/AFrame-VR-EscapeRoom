//Pick Up
var knifeClicks = 0;
var INVENTORY_ITEM_TIME = 3500;

AFRAME.registerComponent('pick-up',  {
	schema: {
		handObj: {type: 'selector', default: ''},
		event: {type: 'string', default: ''}
	},

	init: function() {
		var el = this.el;
		var data = this.data;

		el.addEventListener('click', function() {
			console.log('hello');
			el.setAttribute('visible', 'false');
			data.handObj.setAttribute('visible', 'true');

			if(data.event == 'knife') {
				console.log('knife');
				if(knifeClicks % 2 == 0) {
					console.log('if');
					setTimeout(function() {
						el.setAttribute('visible', 'true');
						data.handObj.setAttribute('visible', 'false');
					}, INVENTORY_ITEM_TIME/2);
				} else {
					console.log('else');
					setTimeout(function() {
					data.handObj.setAttribute('visible', 'false');
					//el.setAttribute('visible', 'true');
				}, INVENTORY_ITEM_TIME);
				}
			} else {
				setTimeout(function() {
					data.handObj.setAttribute('visible', 'false');
					el.setAttribute('visible', 'true');
				}, INVENTORY_ITEM_TIME);
			}
			
			switch (data.event) {
				case 'book1':
					document.querySelector('#windowPortal_1').setAttribute('checkpoint', {
						offset: '-1.3 -1.6 0'
					});
					document.querySelector('#windowPortal_2').setAttribute('checkpoint', {
						offset: '-1 -1.6 0'
					});
					document.querySelector('#couch_1').setAttribute('checkpoint', {
						offset: '0.5 0 -1.5'
					});

					
					break;

				//Fire Items
				case 'RedCandle': 
					var posterColor = document.querySelector('#Fire_color');

					posterColor.setAttribute('rotation', {x: 90, y: 90, z: 0});
					posterColor.classList.add('clickable');


					break;

				case 'SprayBottle':
					var posterColor = document.querySelector('#Fire_color');

					posterColor.setAttribute('rotation', {x: 180, y: 90, z: 0});
					posterColor.classList.add('clickable');

					break;

				case 'Book':
					var posterColor = document.querySelector('#Fire_color');

					posterColor.setAttribute('rotation', {x: 270, y: 90, z: 0});
					posterColor.classList.add('clickable');

					break;

				//Water Items
				case 'Jug':
					var posterColor = document.querySelector('#Water_color');

					posterColor.setAttribute('rotation', {x: 270, y: 0, z: 0});
					posterColor.classList.add('clickable');

					break;

				case 'BlueCandle':
					var posterColor = document.querySelector('#Water_color');

					posterColor.setAttribute('rotation', {x: 0, y: 0, z: 0});
					posterColor.classList.add('clickable');

					break;

				case 'AirPlane':
					var posterColor = document.querySelector('#Water_color');

					posterColor.setAttribute('rotation', {x: 90, y: 0, z: 0});
					posterColor.classList.add('clickable');

					break;

				//Earth Items
				case 'Wood':
					var posterColor = document.querySelector('#Earth_color');

					posterColor.setAttribute('rotation', {x: 270, y: 90, z: 0});
					posterColor.classList.add('clickable');

					break;

				case 'GreenCandle':
					var posterColor = document.querySelector('#Earth_color');

					posterColor.setAttribute('rotation', {x: 0, y: 90, z: 0});
					posterColor.classList.add('clickable');

					break;

				case 'Phone':
					var posterColor = document.querySelector('#Earth_color');

					posterColor.setAttribute('rotation', {x: 90, y: 270, z: 0});
					posterColor.classList.add('clickable');

					break;

				//Wind Items
				case 'CeilingFan':
					var posterColor = document.querySelector('#Wind_color');

					posterColor.setAttribute('rotation', {x: 90, y: 0, z: 0});
					console.log('bonjour');
					posterColor.classList.add('clickable');

					break;

				case 'NewsPaper':
					var posterColor = document.querySelector('#Wind_color');

					posterColor.setAttribute('rotation', {x: 180, y: 0, z: 0});
					posterColor.classList.add('clickable');

					break;

				case 'WaterBottle':
					var posterColor = document.querySelector('#Wind_color');

					posterColor.setAttribute('rotation', {x: 270, y: 0, z: 0});
					posterColor.classList.add('clickable');

					break;


				//later change to death (maybe)
				case 'knife':
					var Wknife = document.querySelector('#Death_Knife');
					var Hknife = document.querySelector('#Inventory_knife');
					var firePoster = document.querySelector('#Fire_color');
					var waterPoster = document.querySelector('#Water_color');
					var earthPoster = document.querySelector('#Earth_color');
					var windPoster = document.querySelector('#Wind_color');

					knifeClicks++;

					if(knifeClicks % 2 != 0) {
						console.log("hello");
						Wknife.classList.add('visible_ritual');
						Hknife.components.sound.playSound();
						setTimeout(function() {
							Hknife.setAttribute('sound', 'src', '#pianohitlaugh');
						}, INVENTORY_ITEM_TIME);
					} else {
						Wknife.classList.remove('visible_ritual');
						Wknife.setAttribute('visible', 'false');

						firePoster.setAttribute('rotation', {x: 0, y: 90, z: 0});
						waterPoster.setAttribute('rotation', {x: 0, y: 270, z: 0});
						earthPoster.setAttribute('rotation', {x: 0, y: 90, z: 0});
						windPoster.setAttribute('rotation', {x: 0, y: 90, z: 0});

						Hknife.components.sound.playSound();
						setTimeout(function() {
							Hknife.setAttribute('sound', 'src', '#pianohit');
						}, INVENTORY_ITEM_TIME);
					}

					break;


				default: 
					break;
			}

		});
	}
});


// ritual items
var ritual_candle = false;
var ritual_waterMug = false;
var ritual_hairDryer = false;
var ritual_plant = false;
var ritual = false;

var win_door = false;
var lose_door = false;
var checks = 0;

AFRAME.registerComponent('check-table', {
	init: function() {
		var el = this.el;
		var ritual = false;

		el.addEventListener('click', function() {
			var deathItems = document.querySelectorAll('.death_item');
			var goodDoor = document.querySelector('#doorPortal_2');
			var badDoor = document.querySelector('#doorPortal_1');

			if(ritual_candle == true && ritual_waterMug == true && ritual_hairDryer == true && ritual_plant == true) {
				ritual = true;
			}

			if(ritual == true && deathItems.length == 0) {
				console.log('ayeeee');

				if (win_door == false) {
					goodDoor.removeAttribute('sound');
					goodDoor.setAttribute('sound', {
						src: '#unlockNoise'
					});
					goodDoor.components.sound.playSound();
					goodDoor.setAttribute('checkpoint', {
					offset: '1.5 -1 10'
					});
				}
				win_door = true;
				
			} else if (checks >= 4 && deathItems.length > 0){
				console.log('no bueno dood');
				if (lose_door == false) {
					badDoor.removeAttribute('sound');
					badDoor.setAttribute('sound', {
						src: '#unlockNoise'
					});
					badDoor.setAttribute('checkpoint', {
						offset: '1 -9.5 1'
					});
					badDoor.components.sound.playSound();
					}
				lose_door = true;
			}

		});
	}
});

AFRAME.registerComponent('check-fireposter', {
	init: function() {
		var el = this.el;

		el.addEventListener('click', function() {
				var fireposter = document.querySelector('#Fire_color');
				var badDoor = document.querySelector('#doorPortal_1');
				var goodDoor = document.querySelector('#doorPortal_2');

				//ritual items
				var candle = document.querySelector('#Ritual_Candle');

				//death items
				var knife = document.querySelector('#Death_Knife');

				checks++;
				fireposter.components.sound.playSound();

				if(fireposter.getAttribute('rotation').x == 90) {
					candle.setAttribute('visible', 'true');
					ritual_candle = true;
					knife.classList.remove('death_item');
					knife.setAttribute('visible','false');
				} else {
					knife.setAttribute('visible', 'true');
					knife.classList.add('death_item');
				}		

		});
	}
});

AFRAME.registerComponent('check-earthposter', {
	init: function() {
		var el = this.el;

		el.addEventListener('click', function() {
				var earthposter = document.querySelector('#Earth_color');

				//ritual items
				var plant = document.querySelector('#Ritual_Plant');

				//death items
				var knife = document.querySelector('#Death_Knife');

				checks++;
				earthposter.components.sound.playSound();

				if(earthposter.getAttribute('rotation').x == 270) {
					plant.setAttribute('visible', 'true');
					ritual_plant = true;
					knife.classList.remove('death_item');
					knife.setAttribute('visible','false');
				} else {
					knife.setAttribute('visible', 'true');
					knife.classList.add('death_item');
				}				
		});
	}
});

AFRAME.registerComponent('check-waterposter', {
	init: function() {
		var el = this.el;

		el.addEventListener('click', function() {
				var waterposter = document.querySelector('#Water_color');

				//ritual items
				var waterMug = document.querySelector('#Ritual_WaterMug');

				//death items
				var knife = document.querySelector('#Death_Knife');

				checks++;
				waterposter.components.sound.playSound();

				if(waterposter.getAttribute('rotation').x == 270) {
					waterMug.setAttribute('visible', 'true');
					ritual_waterMug = true;
					knife.classList.remove('death_item');
					knife.setAttribute('visible','false');
				} else {
					knife.setAttribute('visible', 'true');
					knife.classList.add('death_item');
				}				
		});
	}
});


AFRAME.registerComponent('check-windposter', {
	init: function() {
		var el = this.el;

		el.addEventListener('click', function() {

				var windposter = document.querySelector('#Wind_color');

				//ritual items
				var hairDryer = document.querySelector('#Ritual_HairDryer');

				//death items
				var knife = document.querySelector('#Death_Knife');

				checks++;
				windposter.components.sound.playSound();

				if(windposter.getAttribute('rotation').x == 90) {
					console.log('hello');
					hairDryer.setAttribute('visible', 'true');
					ritual_hairDryer = true;
					knife.classList.remove('death_item');
					knife.setAttribute('visible','false');
				} else {
					knife.setAttribute('visible', 'true');
					knife.classList.add('death_item');
				}				
		});
	}
});


//Change Color (test)
AFRAME.registerComponent('change-color', {
	init: function() {
		var el = this.el;
		var data = this.data;

		el.addEventListener('click', function() {
			el.setAttribute('material', 'color', 'green');
		});
	}
});

// Follow 
AFRAME.registerComponent('follow', {
  schema: {
    target: {type: 'selector', default: ''},
    speed: {type: 'number', default: '2'}
  },

  init: function () {
    this.directionVec3 = new THREE.Vector3();
  },

  tick: function (time, timeDelta) {
    var directionVec3 = this.directionVec3;	

    // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
    var targetPosition = this.data.target.object3D.position;
    var currentPosition = this.el.object3D.position;

    // Subtract the vectors to get the direction the entity should head in.
    directionVec3.copy(targetPosition).sub(currentPosition);

    // Calculate the distance.
    var distance = directionVec3.length();

    // Don't go any closer if a close proximity has been reached.
    if (distance < 1) { return; }

    // Scale the direction vector's magnitude down to match the speed.
    var factor = this.data.speed / distance;
    ['x', 'y', 'z'].forEach(function (axis) {
      directionVec3[axis] *= factor * (timeDelta / 1000);
    });

    // Translate the entity in the direction towards the target.
    this.el.setAttribute('position', {
      x: currentPosition.x + directionVec3.x,
      y: currentPosition.y + directionVec3.y,
      z: currentPosition.z + directionVec3.z
    });
  }
});

//locked door sound
AFRAME.registerComponent('locked-door', {
	init: function() {
		var el = this.el;

		el.addEventListener('click', function() {
			console.log('hello');
			door.components.sound.playSound();
		});
	}
});


AFRAME.registerComponent('refresh-obj', {
   init: function () {
       this.el.addEventListener('click', function () {
           var myGBcursor = document.querySelector('#myGBcursor');
           myGBcursor.components.raycaster.refreshObjects();
       });
   }
});


