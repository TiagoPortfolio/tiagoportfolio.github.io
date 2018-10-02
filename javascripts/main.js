$(document).ready(function(){

	var activePage = 1;

	$ptButton = $('.pt-button');

	$ptButton.on('click', function() {
		// Focus/Unfocus header
		$("#header_wrap a.focused").toggleClass("focused");
		if ($(this).hasClass('button')) { //If view projects button
			$("#projects_header").toggleClass('focused');
		} else {
			$(this).toggleClass('focused');
		}

		$("#header_wrap div:nth-child(2) a:not(.focused)").each(function(){
			$(this).fadeOut(150, function() {
				$(this).show().css({visibility: "hidden"});
	    	});
		});

		setTimeout(function() {
			$("#header_wrap div:nth-child(2) a:not(.focused)").each(function(){
				$(this).hide().css({visibility: "visible"}).fadeIn(150);
	    	});
		}, 300);

		let page = $(this).attr("data-page");
		if (activePage != page) {
			$(".pt-page-" + activePage).fadeOut(function() {
				$(".pt-page-" + page).fadeIn();
				// If projects page, initialize slider before fadeIn()
				if (page == 2) {
					$('.gallery').flickity({
					  accessibility: true,
					  autoPlay: false,
					  cellAlign: 'center',
					  cellSelector: undefined,
					  contain: false,
					  draggable: true,
					  freeScroll: false,
					  friction: 0.2,
					  initialIndex: 1,
					  lazyLoad: true,
					  percentPosition: true,
					  prevNextButtons: true,
					  pageDots: true,
					  resize: true,
					  rightToLeft: false,
					  setGallerySize: false,
					  watchCSS: false,
					  wrapAround: false
					});
				}
			});
			activePage = page;
		}

	    if (page == 3) {
	    	$("#skills-page .container > div:nth-child(1)").addClass('flash_div')
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					$(this).removeClass('flash_div');
				});
	    	$("#skills-page .container > div:nth-child(1)").fadeTo('fast', 1, function() {
	    		$("#skills-page .container > div:nth-child(2)").addClass('flash_div')
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
						$(this).removeClass('flash_div');
					});
    			$("#skills-page .container > div:nth-child(2)").delay("150").fadeTo('fast', 1, function() {
	    			$("#skills-page .container > div:nth-child(3)").addClass('flash_div')
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
							$(this).removeClass('flash_div');
						});
	    			$("#skills-page .container > div:nth-child(3)").delay("150").fadeTo('fast', 1, function() {
	    				$("#skills-page .container > div:nth-child(4)").addClass('flash_div')
							.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
								$(this).removeClass('flash_div');
							});
    					$("#skills-page .container > div:nth-child(4)").delay("150").fadeTo('fast', 1, function() {});
	    			});
	    		});
	    	});
	    }
	});
});

