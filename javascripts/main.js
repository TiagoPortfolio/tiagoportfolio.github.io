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
		$("#header_wrap a.focused").toggleClass("focused");
		$(this).toggleClass('focused');
		var randomAnimation = animations[Math.floor(Math.random()*animations.length)];
		console.log(randomAnimation);
		$(this).addClass('animated ' + randomAnimation)
			.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animated ' + randomAnimation);
			});
	});
});

