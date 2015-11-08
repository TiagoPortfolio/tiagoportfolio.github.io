$(document).ready(function(){
	var animations = [
    'bounce',	'flash', 'rubberBand',
		'shake',	'swing', 'tada',
		'wobble',	'jello', 'flip'
	];

	$('.anim').click(function(e){
		e.preventDefault();
		$(this).removeClass().addClass('animated ' + animations[Math.floor(Math.random()*animations.length)])
			.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass();
			});
	});
});

