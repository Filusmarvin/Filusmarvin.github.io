$('.wid').hide();
$('#contact-me').hide();
// There until I can fix the main
$('.opening').hide();


// $(document).ready(setTimeout(function(){
// 	$('.begin').hide();
// 	$('.wid').show();
// }, 5000));

// $(document).ready(setTimeout(function(){
	// $('.opening').hide();
	$('.main').show();
// }, 10000));

// This is to make the Contact slide in 
$('#contact').on('click',function (event) {
	event.preventDefault();
	$('#contact-me').show();
	hideMain();
});
//This is to hide the main when contact slides in. Eventually will be used for all of them
function hideMain(){
	$('#contact').on('click',setTimeout(function (event) {
		$('.main').hide();
	},3000))
}

function hideContact(){
	$('#contact').on('click',setTimeout(function (event) {
		$('#contact-me').hide();
	},3000))
}

$('#main').on('click',function(event){
	event.preventDefault();
	// $('.main').addClass('mainSlide');
	$('.main').show();
	hideContact()
})

