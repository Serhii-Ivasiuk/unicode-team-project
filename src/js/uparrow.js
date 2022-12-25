function backToTop() {
	let button = $(".up__button");

	$(window).on("scroll", () => {
		if ($(this).scrollTop() >= 1500) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on("click", (e) => {
		e.preventDefault();
		$("html").animate({ scrollTop: 0 }, 250);
	});
}

backToTop();
