$(document).ready(function(){				// на готовность документа;

	if ($(document).width() <= '800') {     // если екран меньше 800 пикселей;
		odinarnaya();                       // запускаем функцию odinarnaya();  
	} else {								// если екран больше 800 пикселей;
		dvoynaya();							// запускаем функцию dvoynaya(); 
	}

	realization();							// запускаем функцию realization(); 

});

$(window).resize(function() {				// на изменение размера екрана;

	if ($(document).width() <= '800') {		// если екран меньше 800 пикселей;
		odinarnaya();						// запускаем функцию odinarnaya(); 
	} else {								// если екран больше 800 пикселей;
		dvoynaya();							// запускаем функцию dvoynaya();
	}
	
	realization();							// запускаем функцию realization(); 

});	

function odinarnaya(){			
			
	var block = $(".review").width();       // ширина блока = ширине всей видимой зоне карусели;
	var wrap = $(".bloc").length;           // количество блоков;
	var wrapWidth = block*wrap;             // ширина обёртки;
	
	$(".review").data("segment", block);    // цифра, равная ширине блока (без пикселей), записаная в дата-атрибуте;
	$(".review").data("clc", wrap);  	    // цифра, равная количеству блоков;
	$(".review").data("case", wrapWidth);   // цифра, равная ширине обёртки (без пикселей);

}

function dvoynaya(){

	var vidimaya = $(".review").width();    // ширина всей карусели (зона видимости);
	var block = vidimaya/2;                 // ширина блока;
	var wrap = $(".bloc").length;           // количество блоков;
	var wrapWidth = block*wrap;             // ширина обёртки;
	
	$(".review").data("segment", block);    // цифра, равная ширине блока (без пикселей), записаная в дата-атрибуте;
	$(".review").data("clc", wrap);  	    // цифра, равная количеству блоков;
	$(".review").data("case", wrapWidth);   // цифра, равная ширине обёртки (без пикселей);

}

function realization(){

	var seg = $(".review").data("segment"); // записали ширину блока в переменную;	
	var cas = $(".review").data("case");    // записали ширину обёртки в переменную;

	$(".bloc").width(seg);					// указали ширину блоку;
	$(".envelope").width(cas);				// указали ширину обёртке;

	$(".bloc").css('margin-bottom','20px');					// указали ширину блоку;
}

$(".comArrowDiv").click(function(){  
	
	var zoro = ($(".review").data("zero"));	// записали текущее значение дата-атрибута "zero" в переменную;
				
	$(".review").data("zero", zoro+1);		// увеличиваем дата-атрибут "zero";
	$(".bloc").eq(0).clone().appendTo(".envelope"); 	// клонируем блок под нулевым индексом и вставляем его в конец обёртки;
	$(".bloc").eq(0).remove();		// удаляем блок под нулевым индексом, и таким образом смещаем все наши елементы в обёртке влево на ширину одного блока;

}); 









