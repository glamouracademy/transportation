//Problem: mobile menu doesn't work
//Solution: when the user taps the hamburger menu, the menu should show
//implementation: http://jsfiddle.net/t7jtnupu/2/		
var $closeIcon = $('<i class="fa fa-times fa-lg">');
var $upChevron = $('<i class="fa fa-chevron-up">');

// //when hamburger menu is tapped,
// //hide hamburger menu icon
// //display close icon
// //display mobile menu

$('.mobile-menu').click(function() {
	var collapsed = $(this).find('i').hasClass('fa fa-bars fa-lg');
	$(this).find('i').removeClass('fa fa-times fa-lg');
	$(this).find('i').addClass('fa fa-bars fa-lg');

	if(collapsed) {
		$(this).find('i').toggleClass('fa fa-bars fa-lg fa fa-times fa-lg');
		$(".main-nav").show();
	} else {
		$(".main-nav").hide();
	}

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






//Submenu anchors 
// var nav = $('ul.submenu'); 

// $('scroll').click(function(event){
// 	event.preventDefault();

// 	var full_url = this.href,
// 	parts = full_url.split('#'),
// 	target = parts[1],
// 	target_offset = $('#' + target).offset(),
// 	target_top = target_offset.top;

// 	$('html, body').animate({scrollTop:target_top}, 500);

// 	nav.children().removeClass();

// 	$(this).parent().addClass('selected');
// });





//if the close icon is tapped, 
//close the mobile menu
//hide close icon
//show hamburger menu icon