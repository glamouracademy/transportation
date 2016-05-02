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

/* service slide up */

$(document).ready(function() {
	var services = $.find('.service');
	var web_window = $(window);

	function check_if_in_view() {
		var window_height = web_window.height();
		var window_top_position = web_window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);		
	

	$.each(services, function() {
		var service = $(this);
		var service_height = $(service).outerHeight();
		var service_top_position = $(service).offset().top;
		var service_bottom_position = (service_top_position + service_height);

		if((service_bottom_position >= window_top_position) && (service_top_position <= window_bottom_position)) {
			service.addClass('in-view');
		} else {
			service.removeClass('in-view');
		}
	});
	}

	$(window).on('scroll resize', function() {
		check_if_in_view()
	})

	$(window).trigger('scroll');

});