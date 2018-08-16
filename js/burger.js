$(document).ready(function(){

	$('.burger').click(function(){										// при клике на значок бургера
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
		$('.substrate').slideUp();							// прячем подложку
		$('.tres').css('opacity', '1');
		$('.uno').css('transform','rotate(0deg)');
		$('.uno').css('position','relative');
		$('.dos').css('transform','rotate(0deg)');
		$('.dos').css('position','relative');
		$('.not_line').css('display','none');
	});

});







/* РАБОЧИЙ КОД, НО Я РЕШИЛ СДЕЛАТЬ ПО ДРУГОМУ

$(document).ready(function(){

	$('.burger').click(function(){										// при клике на значок бургера
		$('.substrate').css('display', 'block');						// открываем подложку
		$('.concealed_menu').css('display', 'block');					// открываем бургер-меню
	});

	$('.substrate, .cross, .concealed_navbar a').click(function(){		// при клике на подложку, крестик или пункт меню         
		$('.substrate').css('display', 'none');							// прячем подложку
		$('.concealed_menu').css('display', 'none');					// прячем бургер-меню
	});

});

*/