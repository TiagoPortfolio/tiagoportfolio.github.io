$(document).ready(function(){

	// HEADER ANIMATIONS
	var animations = [
    'flash', 'rubberBand',
		'swing', 'wobble',
		'jello', 'flip'
	];

	$('.anim').click(function(e){
		e.preventDefault();
		if($(this).hasClass('focused'))
			return false;
		
		var randomAnimation = animations[Math.floor(Math.random()*animations.length)];
		$(this).addClass('animated ' + randomAnimation)
			.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animated ' + randomAnimation);
			});
	});
});

