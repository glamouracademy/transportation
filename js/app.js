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

$('.mobile-menu').click(function() {
	var collapsed = $(this).find('i').hasClass('fa fa-bars fa-lg');
	$(this).find('i').removeClass('fa fa-times fa-lg');
	$(this).find('i').addClass('fa fa-bars fa-lg');
	$(".main-nav").toggle("slide");

	if(collapsed) {
		$(this).find('i').toggleClass('fa fa-bars fa-lg fa fa-times fa-lg');
	}
});

//mobile chevron toggle and display submenu
$(".nav-dropdown").click(function(){
	var collapsed = $(this).find('i').hasClass('fa fa-chevron-down');

	$(this).find('i').removeClass('fa fa-chevron-up');
	$(this).find('i').addClass('fa fa-chevron-down');

	if(collapsed) {
		$(this).find('i').toggleClass('fa fa-chevron-down fa fa-chevron-up');
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
  
  $('html, body').stop(). animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function() {
    window.location.hash = target;
  });
});


//Offerings Nav

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
// function toggleNav() {
// 	function showNav() {
// 		$(".main-nav li.nav-dropdown ul.submenu").addClass("visibility", "visible");
// 	}
// 	function hideNav() {
// 		$(".main-nav li.nav-dropdown ul.submenu").removeClass("visibility", "none");
// 	}
// }

// $(".main-nav li.nav-dropdown ul.submenu").on("hover", toggleNav);


// $("#fold").hover(function() {
// 	$(this).toggle("fold", 1000);
// });

// function toggleNav() {
// 	function showNav() {
// 		if($(".submenu").is(":hidden")) {
// 			$(".nav-dropdown").show();
// 			$(".nav-dropdown").toggle("fold", 1000);
// 		} else {
// 			// $(".nav-dropdown").hide();
// 		}
// 	}
// }
// $(".nav-dropdown").on("hover", toggleNav);


