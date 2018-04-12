$('.wid').hide();
$('#contact-me').hide();
// // There until I can fix the main
$('.opening').hide();


// $(document).ready(setTimeout(function(){
// 	$('.begin').hide();
// 	$('.wid').show();
// }, 5000));

// $(document).ready(setTimeout(function(){
// 	$('.opening').hide();
// 	$('.main').show();
// }, 10000));

// This is to make the Contact slide in 
$('#contact').on('click',function (event) {
	event.preventDefault();
	// $('.')
	$(window).scrollTop(0);
	$('.main').css('z-index',' 1 ');
	$('#contact-me').css('z-index','2');
	$('#contact-me').show();
	hideMain();
});
//This is to hide the main when contact slides in. Eventually will be used for all of them
function hideMain(){
	$('#contact').on('click',setTimeout(function (event) {
		$('.main').hide();
	},2000))
}

function hideContact(){
	$('#contact').on('click',setTimeout(function (event) {
		$('#contact-me').hide();
	},2000))
}

$('#main').on('click',function(event){
	event.preventDefault();
	// $('.main').addClass('mainSlide');
	$('.main').css('z-index',' 2 ');
	$('#contact-me').css('z-index','1');
	$('.main').show();
	hideContact()
})

$('#work').on('click', function(){ $('#contact-me').hide()})
