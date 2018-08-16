$(document).ready(function(){

	$('.reference').click(function(){
		$('.modal_form').css('display', 'block');
	});
	$('.close, .base').click(function(){
		$('.modal_form').css('display', 'none');
	});
	
});