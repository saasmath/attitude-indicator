window.addEventListener('deviceorientation', function(event) {
	var doc = document,
		x = Math.round(event.beta),
		z = Math.round(event.gamma);
	
	doc.querySelector('.x').innerHTML = x;
	doc.querySelector('.z').innerHTML = z;
	
	var roll = -1*z;
	var pitch = 75+x;

	doc.querySelector('.mechanism').style.webkitTransform = 'rotate(' + roll + 'deg)';
	doc.querySelector('.ball').style.top = pitch + 'px';
});
