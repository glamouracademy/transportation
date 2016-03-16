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








//if the close icon is tapped, 
//close the mobile menu
//hide close icon
//show hamburger menu icon