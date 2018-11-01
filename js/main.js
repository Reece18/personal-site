$(document).ready(function() {
	$trigger = false;
	$(".navbar-burger").click(function() {
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
		$(".fa-bars").toggleClass("hide");
		$(".fa-times").toggleClass("hide");
	});
	$(".navbar-item").click(function() {
		$(".navbar-burger").removeClass("is-active");
		$(".navbar-menu").removeClass("is-active");
		$(".fa-times").addClass("hide");
		$(".fa-bars").removeClass("hide");
	});
});
