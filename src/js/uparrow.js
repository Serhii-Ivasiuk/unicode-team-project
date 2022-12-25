function backToTop() {
	let button = $(".up__button");

	$(window).on("scroll", () => {
		if ($(this).scrollTop() >= 350) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on("click", (e) => {
		e.preventDefault();
		$("html").animate({ scrollTop: 0 }, 1000);
	});
}

backToTop();
