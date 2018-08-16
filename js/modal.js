$(document).ready(function(){

	$('.startButton').click(function(){   			// На клик по стартовой кнопке: 
		$('.startButton').removeClass("involved");  // удаляем клас "involved" всем кнопкам товаров
		$(this).addClass("involved"); 	 			// добавляем клас "involved" выбраной кнопке товара
		$('#win').show(300);              			// открываеться модальное окно за 0.3 секунды
		SetImages($(this));               			// задаём все изображения через js
		SetMainCarousel();				  			// задаём параметры главной карусели через js
		SetPreview();					  			// задаём параметры карусели превьюшек через js
		$(".carousel").data("first", 2);  			// задаём значение дата-атрибуту, что бы со старта отсчёт вёлся от третего активного блока
		$(".wrap").css('left',(-1)*$('.carousel').data('block')*$(".carousel").data("first")); // едем влево, что бы со старта третий блок главной карусели был виден
		frame();						  			// настриваем рамку активной превьюшке по умолчанию
		start();						  			// задаём стартовые настройки правому блоку и обёртке превьюшек
	}); 											// закрытие клика по стартовой кнопке
		
	$('.krest, .overlay').click(function(){           // при клике на крестик закрываем модальное окно
		$('#win').css('display', 'none');
	});
	
	$(".arrowRight").click(function(){      // на клик по правой стрелочке запускаеться функция "Вправо"
		RightCarousel();					// в Главной карусели
		RightPreview();						// в Главной карусели
	});

	$(".arrowLeft").click(function(){       // на клик по левой стрелочке запускаеться функция "Влево"
		LeftCarousel();						// в Главной карусели
		LeftPreview();						// в Главной карусели
	});
	
	$(".tab").on("click", function(){      // При клике на квадратики (табы):
    	changeImageColor($(this));
	});	

}); // закрытие документ.реди


$(window).resize(function() {	
	$(".brown").addClass('active')
	SetImages($(this));				 	// устанавливаем коричневые картинки по умолчанию
	SetMainCarousel(); 				 	// перерисовываем главную карусель
	SetPreview();					 	// перерисовываем галерею превьюшек
	$(".carousel").data("first", 2); 	// задаём значение "2" дата-атрибуту, что бы по умолчанию третиий блок был активным
	$(".wrap").css('left',(-1)*$('.carousel').data('block')*$(".carousel").data("first")); // едем влево, что бы со старта третий блок главной карусели был виден
	frame();						 	// настриваем рамку активной превьюшке по умолчанию
	start()							 	// задаём стартовые настройки правому блоку и обёртке превьюшек
});	


function start(){

	$(".previewWrap").css('left', 0);  // со старта обёртка превьюшек находится в начале отсчёта координат
	$(".tab").removeClass("active");   // со старта удаляем активное состояние у квадрата с класом "tab", если оно было
	$(".brown").addClass("active");    // со старта коричневому квадратику ставим активное состояние
	$(".change").html('коричневый');   // со старта в разделе "Цвет" записано "коричневый"

}


function SetMainCarousel(){					// ЗАДАЁМ ПАРАМЕТРЫ (ВЫСОТУ, ШИРИНУ) НАШИМ БЛОКАМ КАРТИНОК И ОБЁРТКЕ

	var block = $(".carousel").width();      // ширина одного блока равна зоне видимосте
	var wrap = $(".block").length;           // находим количество блоков в обёртке
	var wrapWidth = (block)*wrap;            // ширина обёртки равна ширина одного блока умноженого на количество блоков

	if ($(document).width() <= '600') {
		var block = $(".carousel").width();      // ширина одного блока равна зоне видимосте
		var wrap = $(".block").length;           // находим количество блоков в обёртке
		var wrapWidth = (block)*wrap;            // ширина обёртки равна ширина одного блока умноженого на количество блоков
	}

	$(".block").width(block);                   //задали блоку ширину
	$(".block").css('padding-bottom', block);    //задали блоку высоту
	$(".wrap").width(wrapWidth);                //задали обёртке ширину

	$('.carousel').data('block', block);        //задали всей области карусели дата-атрибут "block", котрый равен ширине одного блока
	$('.carousel').data('wrap', wrap);          //задали всей области карусели дата-атрибут "wrap", котрый равен количеству блоков в обёртке

	$(".carousel").data("beam", block);		// устанавливаем дата-атрибут "beam" главной карусели и выводим туда текущую ширину одного блока

}


function SetPreview(){		// ЗАДАЁМ ПАРАМЕТРЫ (ВЫСОТУ, ШИРИНУ) НАШИМ ПРЕВЬЮШКАМ И ОБЁРТКЕ ПРЕВЬЮШЕК
	
	var previewBlock = $(".preview").width()/4;         // ширина одного блока равна зоне видимосте делённой на 4
	var previewWrap = $(".previewBlock").length;       // находим количество блоков в обёртке
	var previewWrapWidth = (previewBlock)*previewWrap;        // ширина обёртки равна ширина одного блока умноженого на количество блоков

	$(".previewBlock").width(previewBlock);        //задали блоку ширину   	//задали блоку высоту
	$(".previewWrap").width(previewWrapWidth);       //задали обёртке ширину

	$('.preview').data('previewBlock', previewBlock);        //задали всей области карусели дата-атрибут "block", котрый равен ширине одного блока
	$('.preview').data('previewWrap', previewWrap);       //задали всей области карусели дата-атрибут "wrap", котрый равен количеству блоков в обёртке

	
	var pequeno = $(".previewBlock");          		// обьявляем переменную, которая содержит все елементы (масив) с класом "previewBlock"
	
	for (var r = 0; r < pequeno.length; r++) {		// перебираем циклом этот масив
		pequeno.eq(r).attr('data-small', r)			// каждому из этих елементов присваиваем дата-атрибут "small" со значением индекса елемента
	}

	$(".previewBlock").on("click", function(){      // При клике на превью
    	echo($(this));								// запускаем функцию echo
	});	

}

function echo(pasear){      // функция смены изображения главной карусели при клике на превью

	$(".wrap").css('left',(-1)*$(".carousel").data('beam')*pasear.data('small')); 	// сдвигаем обёртку главной карусели влево на растояние равное одному блоку умноженому на дата-атрибут 'small'
	$(".carousel").data("first", pasear.data('small')); 							// меняем значение дата-атрибута "first" главной карусели, задав ему значение дата-атрибута 'small'
	frame();																		// запускаем функцию, которая добавляет рамочку, нажатому превьюшному блоку 

}

function frame(){
	var littlePreview = $(".littleP"); 						  				// обьявляем переменную, которая содержит все елементы (масив) с класом "littleP";
	var indexOfLittle = littlePreview.eq($(".carousel").data("first"));		// обьявляем переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "littleP";				    
	littlePreview.removeClass("previewActive");  		      				// удаляем активный клас у всех превьюшек
	indexOfLittle.addClass("previewActive");	              				// елементу под индексом в масиве елементов с класом "littleP" добавляем клас "previewActive"

}

function SetImages(el){
	
// ССЫЛКИ НА ФОН ГЛАВНОЙ КАРУСЕЛИ

	var zajimBrown = new Array();
		zajimBrown[0]="img/modal_img/zajim/zajim1Brown.png";
		zajimBrown[1]="img/modal_img/zajim/zajim2Brown.png";
		zajimBrown[2]="img/modal_img/zajim/zajim3Brown.png";
		zajimBrown[3]="img/modal_img/zajim/zajim4Brown.png";


	var koshelBrown = new Array();
		koshelBrown[0]="img/modal_img/koshel/koshel1Brown.png";
		koshelBrown[1]="img/modal_img/koshel/koshel2Brown.png";
		koshelBrown[2]="img/modal_img/koshel/koshel3Brown.png";
		koshelBrown[3]="img/modal_img/koshel/koshel4Brown.png";
	
	var portmoneBrown = new Array();
		portmoneBrown[0]="img/modal_img/portmone/portmone1Brown.png";
		portmoneBrown[1]="img/modal_img/portmone/portmone2Brown.png";
		portmoneBrown[2]="img/modal_img/portmone/portmone3Brown.png";
		portmoneBrown[3]="img/modal_img/portmone/portmone4Brown.png";


// ССЫЛКИ НА ФОН КАРУСЕЛИ ПРЕВЬЮШЕК

	var zajimLittleBrown = new Array();
		zajimLittleBrown[0]="img/modal_img/zajim/zajim1Brown.png";
		zajimLittleBrown[1]="img/modal_img/zajim/zajim2Brown.png";
		zajimLittleBrown[2]="img/modal_img/zajim/zajim3Brown.png";
		zajimLittleBrown[3]="img/modal_img/zajim/zajim4Brown.png";


	var koshelLittleBrown = new Array();
		koshelLittleBrown[0]="img/modal_img/koshel/koshel1Brown.png";
		koshelLittleBrown[1]="img/modal_img/koshel/koshel2Brown.png";
		koshelLittleBrown[2]="img/modal_img/koshel/koshel3Brown.png";
		koshelLittleBrown[3]="img/modal_img/koshel/koshel4Brown.png";

	var portmoneLittleBrown = new Array();
		portmoneLittleBrown[0]="img/modal_img/portmone/portmone1Brown.png";
		portmoneLittleBrown[1]="img/modal_img/portmone/portmone2Brown.png";
		portmoneLittleBrown[2]="img/modal_img/portmone/portmone3Brown.png";
		portmoneLittleBrown[3]="img/modal_img/portmone/portmone4Brown.png";


	switch (el.data("goods")){

		case 1:

				$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
				$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
				$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
		
			// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
				for (var p = 0; p < zajimBrown.length; p++) {
					$('.wrap').append("<div></div>");
				}

				$('.wrap div').addClass("block");

				var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
				
				for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
					var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
					addBack.css('background', 'url('+ zajimBrown[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
					mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
				}

			// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
				
				for (var g = 0; g < zajimLittleBrown.length; g++) {
					$('.previewWrap').append("<div></div>");
					$('.previewWrap div').addClass("previewBlock");
				}

				for (var n = 0; n < zajimLittleBrown.length; n++) {
					$('.previewBlock').html("<div></div>");
					$('.previewBlock div').addClass("littleP");
				}

				var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
				
				for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
					var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
					addBgr.css('background', 'url('+ zajimLittleBrown[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
					preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
				}

			break;

		case 2:

				$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
				$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
				$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
			

			// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
				for (var p = 0; p < koshelBrown.length; p++) {
					$('.wrap').append("<div></div>");
				}

				$('.wrap div').addClass("block");

				var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
				
				for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
					var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
					addBack.css('background', 'url('+ koshelBrown[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
					mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
				}
				
			// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
				
				for (var g = 0; g < koshelLittleBrown.length; g++) {
					$('.previewWrap').append("<div></div>");
					$('.previewWrap div').addClass("previewBlock");
				}

				for (var n = 0; n < koshelLittleBrown.length; n++) {
					$('.previewBlock').html("<div></div>");
					$('.previewBlock div').addClass("littleP");
				}

				var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
				
				for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
					var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
					addBgr.css('background', 'url('+ koshelLittleBrown[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
					preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
				}

			break;

		case 3:

				$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
				$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
				$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
			
			// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
				for (var p = 0; p < portmoneBrown.length; p++) {
					$('.wrap').append("<div></div>");
				}

				$('.wrap div').addClass("block");

				var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
				
				for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
					var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
					addBack.css('background', 'url('+ portmoneBrown[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
					mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
				}

			// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
				
				for (var g = 0; g < portmoneLittleBrown.length; g++) {
					$('.previewWrap').append("<div></div>");
					$('.previewWrap div').addClass("previewBlock");
				}

				for (var n = 0; n < portmoneLittleBrown.length; n++) {
					$('.previewBlock').html("<div></div>");
					$('.previewBlock div').addClass("littleP");
				}

				var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
				
				for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
					var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
					addBgr.css('background', 'url('+ portmoneLittleBrown[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
					preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
				}

			break;

		case 4:
			alert('ещё одна галерея: визитки');
			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
			$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
			$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
		
			break;
		case 5:
			alert('ещё одна галерея: сумки');
			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
			$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
			$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
		
			break;

	}

}



function LeftCarousel(){

	if($(".carousel").data("first") > 0){                              //если дата-атрибут "first" всей области карусели меньше нуля
		$(".carousel").data("first", $(".carousel").data("first")-1);  //уменьшаем дата-атрибут "first" на еденицу
		$(".wrap").css('left',(-1)*$('.carousel').data('block')*$(".carousel").data("first")); //едем влево на растояние равное ширине одного блока умноженого на дата-атрибут "first" 
	}

    var dataFirst = parseInt($(".carousel").data("first"));   // обьявляем переменную, равную дата атрибуту главной карусели
	var littlePreview = $(".littleP"); 						  // обьявляем переменную, которая содержит все елементы (масив) с класом "littleP";
	var indexOfLittle = littlePreview.eq(dataFirst);		  // обьявляем переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "littleP";				    
	littlePreview.removeClass("previewActive");  		      // удаляем активный клас у всех превьюшек
	indexOfLittle.addClass("previewActive");	              // конкретному елементу под индексом в масиве елементов с класом "littleP" добавляем клас "previewActive"

}


function RightCarousel(){

	if(($(".carousel").data("first") + 1) < $('.carousel').data('wrap')){    //если дата-атрибут "first" всей области карусели плюс еденица меньше количества блоков в обёртке
		$(".carousel").data("first", $(".carousel").data("first")+1);        //увеличиваем дата-атрибут "first" на еденицу
		$(".wrap").css('left',(-1)*$('.carousel').data('block')*$(".carousel").data("first")); //едем влево на растояние равное ширине одного блока умноженого на дата-атрибут "first" 
	}
        
	var dataFirst = parseInt($(".carousel").data("first"));   // обьявляем переменную, равную дата атрибуту главной карусели
	var littlePreview = $(".littleP"); 						  // обьявляем переменную, которая содержит все елементы (масив) с класом "littleP";
	var indexOfLittle = littlePreview.eq(dataFirst);		  // обьявляем переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "littleP";				    
	littlePreview.removeClass("previewActive");  		      // удаляем активный клас у всех превьюшек
	indexOfLittle.addClass("previewActive");	              // конкретному елементу под индексом в масиве елементов с класом "littleP" добавляем клас "previewActive"

}


function LeftPreview(){
	
	var dataFirst = parseInt($(".carousel").data("first"));   // обьявляем переменную, равную дата атрибуту главной карусели
	var sum = dataFirst+1;									  // обьявляем переменную, равную дата атрибуту главной карусели минус единица
	var cantidad  = $(".previewBlock").length;

	var cosa = parseInt($(".previewWrap").css('left'));
	var otro = (-1)*$('.preview').data('previewBlock')*dataFirst;


	if(dataFirst < cantidad-4){
		if (cosa < otro) { 									 					
			$(".previewWrap").css('left',(-1)*$('.preview').data('previewBlock')*dataFirst);
		}
	}	




	


/*  ВАРИАНТ, В КОТОРОМ БЛОКИ В НИЖНЕЙ ПРЕВЬЮШКЕ ЕДУТ ПО 4 СРАЗУ В СЛУЧАЕ ЕСЛИ ДАТА-АТРИБУТ ДЕЛИТЬСЯ НА 4 БЕЗ ОСТАТКА
	
	var dataFirst = parseInt($(".carousel").data("first"));   // обьявляем переменную, равную дата атрибуту главной карусели
	var sum = dataFirst+1;									  // обьявляем переменную, равную дата атрибуту главной карусели минус единица
	
	if (sum % 4 == 0) { 									  // если "дата-атрибут минус единица" делиться без остатка на 4, то				
		$(".previewWrap").css('left',(-1)*$('.preview').data('previewBlock')*(sum-4));   // смещаем нашу обёртку на растояние, равное ширине блока умноженого на "дата-атрибут минус единица
	};

	if(dataFirst === 3){ 									  // Исключение: если "дата-атрибут" равен цифре "три", то						
		$(".previewWrap").css('left', 0);					  // смещаем нашу обёртку на начало отсчёта координат (на ноль)
	}
*/
}


function RightPreview(){

	var dataFirst = parseInt($(".carousel").data("first"));   // обьявляем переменную, равную дата атрибуту главной карусели
	var sum = dataFirst+1;									  // обьявляем переменную, равную дата атрибуту главной карусели минус единица
	var cosa = parseInt($(".previewWrap").css('left'));
	var otro = (-1)*$('.preview').data('previewBlock')*(dataFirst-3);



	if (dataFirst > 3) {			
		if ( cosa > otro) {
			$(".previewWrap").css('left',(-1)*$('.preview').data('previewBlock')*(dataFirst-3));
		}
	}
	






/*  ВАРИАНТ, В КОТОРОМ БЛОКИ В НИЖНЕЙ ПРЕВЬЮШКЕ ЕДУТ ПО 4 СРАЗУ В СЛУЧАЕ ЕСЛИ ДАТА-АТРИБУТ ДЕЛИТЬСЯ НА 4 БЕЗ ОСТАТКА

	var dataFirst = parseInt($(".carousel").data("first"));   // обьявляем переменную, равную дата атрибуту главной карусели
	var sum = dataFirst+1;									  // обьявляем переменную, равную дата атрибуту главной карусели минус единица

	if (dataFirst % 4 == 0) { 								  // если "дата-атрибут" делиться без остатка на 4, то									
		$(".previewWrap").css('left',(-1)*$('.preview').data('previewBlock')* dataFirst);	// смещаем нашу обёртку на растояние, равное ширине блока умноженого на "дата-атрибут"
	}
*/
}





function changeImageColor(kvadratColor){

	var zajimBrown = new Array();
		zajimBrown[0]="img/modal_img/zajim/zajim1Brown.png";
		zajimBrown[1]="img/modal_img/zajim/zajim2Brown.png";
		zajimBrown[2]="img/modal_img/zajim/zajim3Brown.png";
		zajimBrown[3]="img/modal_img/zajim/zajim4Brown.png";

	var zajimBlack = new Array();
		zajimBlack[0]="img/modal_img/zajim/zajim1Black.png";
		zajimBlack[1]="img/modal_img/zajim/zajim2Black.png";
		zajimBlack[2]="img/modal_img/zajim/zajim3Black.png";
		zajimBlack[3]="img/modal_img/zajim/zajim4Black.png";


	var koshelBrown = new Array();
		koshelBrown[0]="img/modal_img/koshel/koshel1Brown.png";
		koshelBrown[1]="img/modal_img/koshel/koshel2Brown.png";
		koshelBrown[2]="img/modal_img/koshel/koshel3Brown.png";
		koshelBrown[3]="img/modal_img/koshel/koshel4Brown.png";
	
	var koshelBlack = new Array();
		koshelBlack[0]="img/modal_img/koshel/koshel1Black.png";
		koshelBlack[1]="img/modal_img/koshel/koshel2Black.png";
		koshelBlack[2]="img/modal_img/koshel/koshel3Black.png";
		koshelBlack[3]="img/modal_img/koshel/koshel4Black.png";


	var portmoneBrown = new Array();
		portmoneBrown[0]="img/modal_img/portmone/portmone1Brown.png";
		portmoneBrown[1]="img/modal_img/portmone/portmone2Brown.png";
		portmoneBrown[2]="img/modal_img/portmone/portmone3Brown.png";
		portmoneBrown[3]="img/modal_img/portmone/portmone4Brown.png";

	var portmoneBlack = new Array();
		portmoneBlack[0]="img/modal_img/portmone/portmone1Black.png";
		portmoneBlack[1]="img/modal_img/portmone/portmone2Black.png";
		portmoneBlack[2]="img/modal_img/portmone/portmone3Black.png";
		portmoneBlack[3]="img/modal_img/portmone/portmone4Black.png";


// ССЫЛКИ НА ФОН КАРУСЕЛИ ПРЕВЬЮШЕК

	var zajimLittleBrown = new Array();
		zajimLittleBrown[0]="img/modal_img/zajim/zajim1Brown.png";
		zajimLittleBrown[1]="img/modal_img/zajim/zajim2Brown.png";
		zajimLittleBrown[2]="img/modal_img/zajim/zajim3Brown.png";
		zajimLittleBrown[3]="img/modal_img/zajim/zajim4Brown.png";

	var zajimLittleBlack = new Array();
		zajimLittleBlack[0]="img/modal_img/zajim/zajim1Black.png";
		zajimLittleBlack[1]="img/modal_img/zajim/zajim2Black.png";
		zajimLittleBlack[2]="img/modal_img/zajim/zajim3Black.png";
		zajimLittleBlack[3]="img/modal_img/zajim/zajim4Black.png";

	
	var koshelLittleBrown = new Array();
		koshelLittleBrown[0]="img/modal_img/koshel/koshel1Brown.png";
		koshelLittleBrown[1]="img/modal_img/koshel/koshel2Brown.png";
		koshelLittleBrown[2]="img/modal_img/koshel/koshel3Brown.png";
		koshelLittleBrown[3]="img/modal_img/koshel/koshel4Brown.png";

	var koshelLittleBlack = new Array();
		koshelLittleBlack[0]="img/modal_img/koshel/koshel1Black.png";
		koshelLittleBlack[1]="img/modal_img/koshel/koshel2Black.png";
		koshelLittleBlack[2]="img/modal_img/koshel/koshel3Black.png";
		koshelLittleBlack[3]="img/modal_img/koshel/koshel4Black.png";


	var portmoneLittleBrown = new Array();
		portmoneLittleBrown[0]="img/modal_img/portmone/portmone1Brown.png";
		portmoneLittleBrown[1]="img/modal_img/portmone/portmone2Brown.png";
		portmoneLittleBrown[2]="img/modal_img/portmone/portmone3Brown.png";
		portmoneLittleBrown[3]="img/modal_img/portmone/portmone4Brown.png";

	var portmoneLittleBlack = new Array();
		portmoneLittleBlack[0]="img/modal_img/portmone/portmone1Black.png";
		portmoneLittleBlack[1]="img/modal_img/portmone/portmone2Black.png";
		portmoneLittleBlack[2]="img/modal_img/portmone/portmone3Black.png";
		portmoneLittleBlack[3]="img/modal_img/portmone/portmone4Black.png";



		$(".tab").removeClass("active");   // удаляем класс (рамочку) во всех вкладках
    	kvadratColor.addClass("active");        // добавляем класс (рамочку) текущей (нажатой)
		



    	switch ($(".involved").data('goods')){
    		case 1:
	    		if ($(".brown").hasClass('active')) {
	    			$(".change").html('коричневый')      // то изменяем текст на "коричневый"
		    		
		    			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
						$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
						$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
				



					// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
						for (var p = 0; p < zajimBrown.length; p++) {
							$('.wrap').append("<div></div>");
						}

						$('.wrap div').addClass("block");

						var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
							var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBack.css('background', 'url('+ zajimBrown[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

					// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
						
						for (var g = 0; g < zajimLittleBrown.length; g++) {
							$('.previewWrap').append("<div></div>");
							$('.previewWrap div').addClass("previewBlock");
						}

						for (var n = 0; n < zajimLittleBrown.length; n++) {
							$('.previewBlock').html("<div></div>");
							$('.previewBlock div').addClass("littleP");
						}

						var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
							var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBgr.css('background', 'url('+ zajimLittleBrown[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

						SetMainCarousel();
						SetPreview();
	    		} else {
	    			$(".change").html('чёрный')	         // изменяем текст на "чёрный"
		    		
		    			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
						$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
						$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
					


					// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
						for (var p = 0; p < zajimBlack.length; p++) {
							$('.wrap').append("<div></div>");
						}

						$('.wrap div').addClass("block");

						var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
							var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBack.css('background', 'url('+ zajimBlack[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

					// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
						
						for (var g = 0; g < zajimLittleBlack.length; g++) {
							$('.previewWrap').append("<div></div>");
							$('.previewWrap div').addClass("previewBlock");
						}

						for (var n = 0; n < zajimLittleBlack.length; n++) {
							$('.previewBlock').html("<div></div>");
							$('.previewBlock div').addClass("littleP");
						}

						var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
							var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBgr.css('background', 'url('+ zajimLittleBlack[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

						SetMainCarousel();
						SetPreview();
	    		}
	    		break;

    		case 2:
    			if ($(".brown").hasClass('active')) {
	    			$(".change").html('коричневый')      // то изменяем текст на "коричневый"
		   		
		    		
		    			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
						$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
						$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
						



					// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
						for (var p = 0; p < koshelBrown.length; p++) {
							$('.wrap').append("<div></div>");
						}

						$('.wrap div').addClass("block");

						var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
							var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBack.css('background', 'url('+ koshelBrown[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

					// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
						
						for (var g = 0; g < koshelLittleBrown.length; g++) {
							$('.previewWrap').append("<div></div>");
							$('.previewWrap div').addClass("previewBlock");
						}

						for (var n = 0; n < koshelLittleBrown.length; n++) {
							$('.previewBlock').html("<div></div>");
							$('.previewBlock div').addClass("littleP");
						}

						var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
							var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBgr.css('background', 'url('+ koshelLittleBrown[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

						SetMainCarousel();
						SetPreview();
	    		} else {
	    			$(".change").html('чёрный')	         // изменяем текст на "чёрный"
		    		
		    			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
						$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
						$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
					




					// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
						for (var p = 0; p < koshelBlack.length; p++) {
							$('.wrap').append("<div></div>");
						}

						$('.wrap div').addClass("block");

						var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
							var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBack.css('background', 'url('+ koshelBlack[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

					// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
						
						for (var g = 0; g < koshelLittleBlack.length; g++) {
							$('.previewWrap').append("<div></div>");
							$('.previewWrap div').addClass("previewBlock");
						}

						for (var n = 0; n < koshelLittleBlack.length; n++) {
							$('.previewBlock').html("<div></div>");
							$('.previewBlock div').addClass("littleP");
						}

						var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
							var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBgr.css('background', 'url('+ koshelLittleBlack[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

						SetMainCarousel();
						SetPreview();
	    		}
	    		break;

    		case 3:
    			if ($(".brown").hasClass('active')) {
	    			$(".change").html('коричневый')      // то изменяем текст на "коричневый"
		   		
		    		    	
		    		
		    			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
						$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
						$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
					



					// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
						for (var p = 0; p < portmoneBrown.length; p++) {
							$('.wrap').append("<div></div>");
						}

						$('.wrap div').addClass("block");

						var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
							var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBack.css('background', 'url('+ portmoneBrown[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

					// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
						
						for (var g = 0; g < portmoneLittleBrown.length; g++) {
							$('.previewWrap').append("<div></div>");
							$('.previewWrap div').addClass("previewBlock");
						}

						for (var n = 0; n < portmoneLittleBrown.length; n++) {
							$('.previewBlock').html("<div></div>");
							$('.previewBlock div').addClass("littleP");
						}

						var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
							var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBgr.css('background', 'url('+ portmoneLittleBrown[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

						SetMainCarousel();
						SetPreview();
	    		} else {
	    			$(".change").html('чёрный')	         // изменяем текст на "чёрный"
		    		
		    			$("div.block").remove();         // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "block"
						$("div.littleP").remove(); 		 // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "littleP"
						$("div.previewBlock").remove();  // удалить все УЖЕ СУЩЕСТВУЮЩИЕ блоки с класом "previewBlock"
					



					// УСТАНАВЛИВАЕМ КАРТИНКИ ГЛАВНОЙ ГАЛЕРЕЕ
						for (var p = 0; p < portmoneBlack.length; p++) {
							$('.wrap').append("<div></div>");
						}

						$('.wrap div').addClass("block");

						var mainBlock = $(".block"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var i = 0; i < mainBlock.length; i++) {    // перебираем все наши елементы с класом "block"
							var addBack = mainBlock.eq(i);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBack.css('background', 'url('+ portmoneBlack[i] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							mainBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

					// УСТАНАВЛИВАЕМ КАРТИНКИ НАШИМ ПРЕВЬЮШКАМ
						
						for (var g = 0; g < portmoneLittleBlack.length; g++) {
							$('.previewWrap').append("<div></div>");
							$('.previewWrap div').addClass("previewBlock");
						}

						for (var n = 0; n < portmoneLittleBlack.length; n++) {
							$('.previewBlock').html("<div></div>");
							$('.previewBlock div').addClass("littleP");
						}

						var preBlock = $(".littleP"); 					// обьявляем переменную, которая содержит все елементы (масив) с класом "block"
						
						for (var j = 0; j < preBlock.length; j++) {    // перебираем все наши елементы с класом "block"
							var addBgr = preBlock.eq(j);					// создаём переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "block"
							addBgr.css('background', 'url('+ portmoneLittleBlack[j] +') no-repeat center center'); // каждому конкретному елементу под индексом в масиве елементов с класом "block" присваиваем фоновое изображение по индексу
							preBlock.css('background-size', 'contain'); // всем елементам с класом "block" добавляем css-свойство "размер фона такой, чтобы картинка целиком поместилась внутрь блока"
						}

						SetMainCarousel();
						SetPreview();
	    		}
	    		break;

    		case 4:
    			alert(30);
	    		break;

	    	case 5:
    			alert(33);
	    		break;
    	}


// Добавление тени вокруг рамки активному класу
		var lp = $(".littleP"); 						  // обьявляем переменную, которая содержит все елементы (масив) с класом "littleP";
		var iol = lp.eq($(".carousel").data("first"));		  // обьявляем переменную, которая содержит конкретный елемент под индексом в масиве елементов с класом "littleP";				    
		lp.removeClass("previewActive");  		      // удаляем активный клас у всех превьюшек
		iol.addClass("previewActive");



}








