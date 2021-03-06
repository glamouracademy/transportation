//Problem: mobile menu doesn't work
//Solution: when the user taps the hamburger menu, the menu should show

// when hamburger menu is tapped,
// hide hamburger menu icon
// display close icon
// display mobile menu
// if the close icon is tapped, 
// close the mobile menu
// hide close icon
// show hamburger menu icon

// hide and show mobile main nav
// switch icons
// close main nav when user clicks off menu

$("ul.main-nav").on("click", function(event) {
	event.stopPropagation();
});

$('#main').click(function(event){
	event.stopPropagation();
	$('.main-nav').toggle("slide")
	$('#main').toggleClass('selected', '');
	$('.mobile-menu').find('i').toggleClass('fa fa-bars fa-lg fa fa-times fa-lg')
})

//mobile chevron toggle and display submenu
$("i[class*='chevron']").click(function(){
	var collapsed = !$(".nav-dropdown").hasClass("selected");

	if(collapsed) {
		$(".submenu").slideDown("slow");
		$(".nav-dropdown").addClass("selected");
	} else {
		$(".submenu").slideUp("slow");
		$(".nav-dropdown").removeClass("selected");
	}
});

//Smooth scrolling anchors 
$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function() {
    window.location.hash = target;
  });
});

//Offerings Nav: Tablet/Desktop

//when clicking a nav tab
	//underline the active tab
	//make active tab text white
	//remove underline from fmr tab
	//make fmr tab gray font
//display active tab content
//hide fmr tab content

$('.navigation a').click(function(){

	var past_active_nav = $('.navigation li.active');
	past_active_nav.removeClass('active');

	var new_active_nav = $(this).parent('li').addClass('active');

	$('.content').hide();
	$(this.getAttribute('href')).show();

});

//Offerings Nav: Mobile 

$(function() {
	$("#accordion").accordion({
		heightStyle: "content"
	});
});

//when tab title clicked
//add active state for tab nav (red background and white text)
//remove active state from fmr tab nav

$('nav.offering-nav').click(function(){
	var past_tab_nav = $('nav.offering-nav.tapped');
	past_tab_nav.removeClass('tapped');
	var new_tab_nav = $(this).addClass('tapped');
});

//desktop: offerings slide in
$(window).scroll(function(){
	if($(window).scrollTop() > 0) 
	{
		$('.slide-left').stop().animate({ left: '5vw' });
		$('.slide-right').stop().animate({ right: '5vw' });	
	} else {
		$('.slide-left').stop().animate({ left: '-150vw' });
		$('.slide-right').stop().animate({ right: '-150vw' });	
	}
})

//desktop: slidedown, anchored navigation
$(window).on('scroll', function() {
	var locationOfBanner = $('.banner-content p').scrollTop();
	var bannerHeight = $('.banner-content p').outerHeight();
	var positionOfBanner = (locationOfBanner + bannerHeight);
	var distanceToTop = $(window).scrollTop();

	if (positionOfBanner <= distanceToTop) {
		$('header').addClass('anchored-header');
	} else {
		$('header').removeClass('anchored-header');
	}
});

/* desktop blog slide in */
$(window).scroll(function(){
	if($(window).scrollTop() > 1680) {
		$('.blogs-first .left').stop().animate({ left: '.1vw' }, 150, "linear");
		$('.blogs-first .right').stop().animate({ right: '.1vw' }, 150, "linear");
	} else {
		$('.blogs-first .left').stop().animate({ left: '-30vw' }, 150, "linear");
		$('.blogs-first .right').stop().animate({ right: '-30vw' }, 150, "linear");
	}
});

$(window).scroll(function(){
	if($(window).scrollTop() > 2080) {
		$('.blogs-second .left').stop().animate({ left: '.1vw' }, 150, "linear");
		$('.blogs-second .right').stop().animate({ right: '.1vw' }, 150, "linear");
	} else {
		$('.blogs-second .left').stop().animate({ left: '-30vw' }, 150, "linear");
		$('.blogs-second .right').stop().animate({ right: '-30vw' }, 150, "linear");
	}
});

$(window).trigger('scroll');

