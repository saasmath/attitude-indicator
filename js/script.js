function onOrientation(event) {
	var x = Math.round(event.beta);
	var z = Math.round(event.gamma);
	
	$('.x').html(x);
	$('.z').html(z);
	
	var roll = -1*z;
	var pitch = 75+x;
	
	$('.mechanism').css('-webkit-transform', 'rotate(' + roll + 'deg)');
	//$('.mechanism').animate({rotate : '100px'}, 3000);
	$('.ball').css('top', pitch + 'px');
}

window.addEventListener('deviceorientation', onOrientation);