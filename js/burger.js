$(document).ready(function(){

	$('.burger').click(function(){							// при клике на значок бургера
		$('.substrate').slideDown();						// открываем подложку					// открываем бургер-меню
		$('.tres').css('opacity', '0');
		$('.uno').css('transform','rotate(45deg)');
		$('.uno').css('position','absolute');
		$('.dos').css('transform','rotate(-45deg)');
		$('.dos').css('position','absolute');
		$('.not_line').css('display','block');
		$('.dos').css('position','absolute');
	});

	




	$('.substrate, .concealed_navbar a, .not_line').click(function(){		// при клике на подложку, крестик или пункт меню         
		$('.substrate').slideUp();						// прячем подложку
		$('.tres').css('opacity', '1');
		$('.uno').css('transform','rotate(0deg)');
		$('.uno').css('position','relative');
		$('.dos').css('transform','rotate(0deg)');
		$('.dos').css('position','relative');
		$('.not_line').css('display','none');
	});

});


