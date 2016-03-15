//Problem: mobile menu doesn't work
//Solution: when the user taps the hamburger menu, the menu should show

var $closeIcon = $('<i class="fa fa-times fa-lg">');

//when hamburger menu is tapped,
$('.fa-bars').click(function(){
//hide hamburger menu icon
//display close icon
	$(this).replaceWith($closeIcon);
//display mobile menu
$(".main-nav").show();

});










//if the close icon is tapped, 
//close the mobile menu
//hide close icon
//show hamburger menu icon