$(document).ready(function () {

	var activePage = 1;

	$ptButton = $('.pt-button');

	$ptButton.on('click', function () {
		// Focus/Unfocus header
		$("#header_wrap a.focused").toggleClass("focused");
		if ($(this).hasClass('button')) { //If view projects button
			$("#projects_header").toggleClass('focused');
		} else {
			$(this).toggleClass('focused');
		}

		$("#header_wrap div:nth-child(2) a:not(.focused)").each(function () {
			$(this).fadeOut(150, function () {
				$(this).show().css({ visibility: "hidden" });
			});
		});

		setTimeout(function () {
			$("#header_wrap div:nth-child(2) a:not(.focused)").each(function () {
				$(this).hide().css({ visibility: "visible" }).fadeIn(150);
			});
		}, 300);
	});
});

