//Problem: mobile menu doesn't work
//Solution: when the user taps the hamburger menu, the menu should show
//implementation: http://jsfiddle.net/t7jtnupu/2/		
var $closeIcon = $('<i class="fa fa-times fa-lg">');

// //when hamburger menu is tapped,
// $('.fa-bars').click(function(){
// //hide hamburger menu icon
// //display close icon
// 	$(this).replaceWith($closeIcon);
// //display mobile menu
// $(".main-nav").show();

// });


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

//Main Nav Dropdown
// $('ul.main-nav li').hover(function(){
// 	$(this).addClass("hover");
// 	$(this).css("visibility", "visible");
// }, function(){
// 	$(this).removeClass("hover");
// 	$(this).css("visibility", "hidden");
// });


//Mobile Menu SlideUp and SlideDown
$(".nav-dropdown").click(function() {
	if($(".submenu").is(":hidden")) {
		$(".submenu").slideDown("slow");
	} else {
		$(".submenu").slideUp("slow");
	}
});


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