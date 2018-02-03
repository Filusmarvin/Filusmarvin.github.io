$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    $('.sign-in').hide();
	    $('.sign-up').hide();
	    console.log(user);
	  } else {
	    // No user is signed in.
	    $('.sign-in').show();
	    console.log('no user');
	  }
	});
	if (user.name) {
		$('.name1').hide();
		$('.name2').show();
	} else{
		$('.name2').hide();
		$('.name1').show();
	}
})

function createUser(event){
	event.preventDefault();
	let email = $('.email2').val();
	let pass2 = $('.pass2').val();
	let pass3 = $('.pass3').val();
	let password;
	console.log(pass2,pass3)
	if (pass2 === pass3 && pass2.length >= 8 && pass3.length >= 8) {
		password = pass2;
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode,errorMessage);
		});
	} else{
		null;
	}
}



function logIn(event) {
	event.preventDefault();
	event.stopPropagation();
	let email = $('.username').val();
	let password = $('.password').val();
	console.log(email,password)
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	console.log(errorCode,errorMessage);
	});
}

function signUp(event){
	event.preventDefault();
	$('.sign-in').hide();
	$('.sign-up').show();
}