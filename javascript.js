// function testScroll(ev){
//     if(window.pageYOffset>400)alert('User has scrolled at least 400 px!');
// }
// window.onscroll=testScroll


$('.nav').on('click',function (event) {
	let id = event.target.id;
	if( id === "work"){

	} else if (id === 'contact') {

	} else if (id === 'about') {

	}

})

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
		// if(scrollDirection === "up"){
		// 	console.log("the direction is up");
		// } else if (scrollDirection === "down") {
		// 	console.log("this scroll direction is down")
		// }

	}, 50);

}, null);

// SetTime out function for the animation in section two left side List...

$(window).ready(setTimeout(
	function () {
    	// console.log(pageYOffset)
    	$(document).ready(setTimeout(function(){
			$('.dev').show();	
		},1000));

		$(document).ready(setTimeout(function(){
			$('.school').show();
		},2000));

		$(document).ready(setTimeout(function(){
			$('.camp').show();	
		},3000));
		$(document).ready(setTimeout(function(){
			
			$('.future').show();	
		},4000));
}, 11000))

// Background color for the header after certain scroll amount

$(window).scroll(function () {
	if (pageYOffset>50) {
		$('#header').css("background","linear-gradient(to right, #eef2f3 , #004e92)");
	} else {
		$('#header').css('background','none');
	}
})
// animation for the experience section
$(window).scroll(function () {
	console.log(pageYOffset)
	if (pageYOffset>500) {
		$('.repo-img-uno').show();
		$('.repo-img-uno').addClass('gitAni1');
	} 
	if (pageYOffset>1160) {
		$('.repo-img-dos').show();
		$('.repo-img-dos').addClass('gitAni2');
	}
	if (pageYOffset< 400) {
		$('.repo-img-uno').hide();
		$('.repo-img-dos').hide();
	}

	//animation for the skills bars
	// if (pageYOffset> 2075) {
	// 	$('.skill1').addClass('upDown1');
	// 	$('.skill2').addClass('upDown2');
	// }
});

// $('.').on('click',function(){
// 	window.scrollBy(763);
// 	alert()
// })






var num = 1;

$(document).ready(setInterval(function () {
	// console.log(num)

	switch(num){
	case 1:
		$('.back1').attr('class','back2');
		num++;
		break;
	case 2:
		$('.back2').attr('class','back3');
		num++;
		break;
	case 3:
		$('.back3').attr('class','back4');
		num++;
		break;
	case 4:
		$('.back4').attr('class','back1');
		num = 1;
		break;
	}
},7000))

// Array and function for random photo

// $(window).ready(function(){
// 	var arr = [];
// 	while(arr.length < 4){
// 	    var randomnumber = Math.floor(Math.random()*100) + 1;
// 	    if(arr.indexOf(randomnumber) > -1) continue;
// 	    arr[arr.length] = randomnumber;
// 	}
// 	// console.log(arr);
// 	let num1 = arr[0];
// 	let num2 = arr[1];
// 	// let num3 = arr[2];

// 	let a = "" + num1 + num2;
// 	console.log(a)
// 	let key ="7955846-4dce5a3ca0059f6d2d4d8a9e3";
// 	return fetch(`https://pixabay.com/api/?key=${key}&id=${a}`)
// 	.then(response => response.json()).then(photo);
// })

// function photo(data) {
// 	let photo = data;
// 	console.log(photo);
// 	$('.random').attr('src',`${photo}`)

// }

$( "#contact-me" ).mousemove(function( event ) {
  var msg = "Handler for .mousemove() called at ";
  let x = event.pageX;
  let y = event.pageY;
  msg += x + ", " + y;
  // console.log(msg)
  if (x >= 0 && x <= 340 && y >= 0 && y <= 215) {
  	console.log("top left");
  } else if(x >= 0 && x <= 340 && y >= 216 && y <= 480){
  	console.log('middle left');
  } else if (x >= 0 && x <= 340 && y >= 481){
  	console.log('bottom left');
  } else if (x >= 341 && x <= 635 && y >= 0 && y <= 215){
  	console.log('top middle');
  } else if (x >= 636 && x <= 1000 && y >= 0 && y <= 215){
  	console.log('top right');
  } else if (x >= 341 && x <= 635 && y >= 216 && y <= 480){
  	console.log('middle middle');
  } else if (x >= 341 && x <= 635 && y >= 481) {
  	console.log('middle bottom');
  } else if (x >= 636 && x <= 1000 && y >= 216 && y <= 480) {
  	console.log('middle right');
  } else if (x >= 636 && x <= 1000 && y >= 481){
  	console.log('bottom right');
  }
});


// $('#work').click(function (event) {
//   event.preventDefault();
//   $('#experience').scrollView();
// });


$('#work').on('click',function(event){
	$('.main').show();
})


