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

// $('.mobile-menu').click(function(event){
// 	$('.main-nav').toggle("slide")
// 	$('.mobile-menu').find('i').toggleClass('fa fa-bars fa-lg fa fa-times fa-lg')
// });

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
$(".nav-dropdown").click(function(){
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
	$("#accordion").accordion();
});

//when tab title clicked
//add active state for tab nav (red background and white text)
//remove active state from fmr tab nav

$('nav.offering-nav').click(function(){
	var past_tab_nav = $('nav.offering-nav.tapped');
	past_tab_nav.removeClass('tapped');
	var new_tab_nav = $(this).addClass('tapped');
});


//Offerings sliding in (desktop)
var $animation_element = $('.value.slide-left');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position - window_height);

	// $.each($animation_element, function() {
	// 	var $element = $(this);
		var element_height = $animation_element.outerHeight();
		var element_top_position = $animation_element.offset().top;
		var element_bottom_position = (element_top_position - element_height);

	//check to see if the current container is within viewport
		if((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			$animation_element.addClass('in-view');
		} else {
			$animation_element.removeClass('in-view');
		}
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


//Mobile and Tablet Menu SlideUp and SlideDown
// $(".nav-dropdown").click(function() {
// 	if($(".submenu").is(":hidden")) {
// 		$(".submenu").slideDown("slow");
// 		$(".nav-dropdown").addClass("selected");
// 	} else {
// 		$(".submenu").slideUp("slow");
// 		$(".nav-dropdown").removeClass("selected");
// 	}
// });

//Main Nav Dropdown
// $(".main-nav li.nav-dropdown ul.submenu").hover(function(){
// 	$(this).addClass("hover");
// 	$(this).css("visibility", "visible");
// 	$(this).css("display", "block");
// }, function(){
// 	$(this).removeClass("hover");
// 	$(this).css("visibility", "hidden");
// 	$(this).css("display", "none");
// });


//Main Nav Submenu 
// $(".submenu").hide();
// $(".nav-dropdown").hover(function(e){
// 	$('.submenu').slideToggle(500);
// 	e.preventDefault;
// });


//desktop: differentiators slide in
$(window).scroll(function(){
	if($(window).scrollTop() > 0) 
	{
		$('.slide-left').stop().animate({ left: '10vw' });
		$('.slide-right').stop().animate({ right: '10vw' });	
	} else {
		$('.slide-left').stop().animate({ left: '-150vw' });
		$('.slide-right').stop().animate({ right: '-150vw' });	
	}
})



