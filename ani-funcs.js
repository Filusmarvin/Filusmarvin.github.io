$(window).scroll(function(e){
	var offset = $('#date-box').offset();
	console.log(offset);
	var body = document.body,
    html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	console.log(height)
});