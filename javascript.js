$(window).scroll(function(){

})
$('.dev').hide();
$('.school').hide();
$('.camp').hide();
$('.future').hide();

// Setup isScrolling variable
var isScrolling;
var lastScrollTop = 0;
var scrollDirection;

// Listen for scroll events
$(window).scroll(function () {

	// direction of scroll
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	      // downscroll code
	      scrollDirection = "down"
	      // console.log(scrollDirection);
	   } else {
	      // upscroll code
	      scrollDirection = "up"
	      // console.log(scrollDirection);
	   }
	   lastScrollTop = st;

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
		// console.log( 'Scrolling has stopped.' );
		if(scrollDirection === "up"){
			console.log("the direction is up");
		} else if (scrollDirection === "down") {
			console.log("this scroll direction is down")
		}

	}, 50);

}, null);

// SetTime out function for the animation in section two left side List...

$(document).ready(setTimeout(function(){
	$('.dev').show();	
	console.log('ran')
},2000));

$(document).ready(setTimeout(function(){
	$('.school').show();
	console.log('ran')
},3000));

$(document).ready(setTimeout(function(){
	$('.camp').show();	
	console.log('ran')
},4000));
$(document).ready(setTimeout(function(){
	
	$('.future').show();	
	console.log('ran')
},5000));


