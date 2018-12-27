(function() {

	let sectionButtons = document.getElementsByClassName("pt-button");
	let header = document.getElementById("header_wrap");

	Array.prototype.forEach.call(sectionButtons, function(button, i) {
		button.onclick = () => {
			header
				.querySelector("a.focused")
				.classList.toggle("focused");
	
			if (button.classList.contains('button')) { // If view projects button
				document.getElementById("projects_header")
					.classList.toggle("focused");
			} else {
				button.classList.toggle("focused");
			}
	
			let unfocusedElements = header
				.querySelectorAll("div:nth-child(2) a:not(.focused)");

			// Fade in and out header elements
			Array.prototype.forEach.call(unfocusedElements, function(el, i) {
				el.classList.toggle("hide");
			});
	
			setTimeout(() => {
				Array.prototype.forEach.call(unfocusedElements, function(el, i) {
					el.classList.toggle("hide");
				});
			}, 300);
		};
	});
	

	document.getElementById("close-toast").onclick = () => {
		document
			.getElementById("service-worker_update")
			.classList.toggle("show");
	};

	document.getElementById("refresh-page").onclick = () => {
		window.location.reload();
	};
})();
