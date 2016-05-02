/* services blog slide in */
$(window).scroll(function(){
	var blogsTop = $(".blogs").offset().top;

	if($(window).scrollTop() > 900) {
		$('.blogs-first .left').stop().animate({ left: '.1vw' }, 150, "linear");
		$('.blogs-first .right').stop().animate({ right: '.1vw' }, 150, "linear");
	} else {
		$('.blogs-first .left').stop().animate({ left: '-30vw' }, 150, "linear");
		$('.blogs-first .right').stop().animate({ right: '-30vw' }, 150, "linear");
	}
});

$(window).scroll(function(){
	var offeringsHeight = $(".offerings").height();
	if($(window).scrollTop() > 1150) {
		$('.blogs-second .left').stop().animate({ left: '.1vw' }, 150, "linear");
		$('.blogs-second .right').stop().animate({ right: '.1vw' }, 150, "linear");
	} else {
		$('.blogs-second .left').stop().animate({ left: '-30vw' }, 150, "linear");
		$('.blogs-second .right').stop().animate({ right: '-30vw' }, 150, "linear");
	}
});