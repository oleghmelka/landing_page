( function() {

    var links = document.querySelectorAll( '.navbar a, .concealed_navbar a, .Border a' ),p,h,time,
        fps =  60, duration = 1, distance, inc, cur;

    for( var i = 0; i < links.length; i++ ) {

        links[i].onclick = function(e) {

            e.preventDefault();
            p = document.documentElement.scrollTop;
            var href = this.href.split('#')[1];
            h = document.getElementById( href ).getBoundingClientRect().top + document.documentElement.scrollTop;
            distance = h - p;
            inc = distance/(duration*fps);
            cur = p;
            time = 0;
            timer = setInterval( smoothScroll, 1000/fps );

        }

    }

    function smoothScroll() {
        time += 1/fps;
        cur = easeInOutQuad(time*100/duration, time, p, h, duration);
        if( cur>=h ) {
            clearInterval(timer);
            window.scrollTo(0,h);
            return;
        }
        window.scrollTo(0, cur);
    };

    // t - текущее время
    // b - начальное значение
    // с - макс
    // d - длительность
    function easeInOutQuad(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        } else {
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    }
    

} )();





/*


( function() {  // нашу функцию пишем в скобках для того, чтобы все переменные в ней были действительны только в этой функции (зоны видимости);

    var links = document.querySelectorAll( '.navbar a, .concealed_navbar a, .Border a' ),t,h,timer;  // определяем переменные, в переменную links записываем масив из всех ссылок меню и бургур-меню;

    for( var i = 0; i < links.length; i++ ) {   // перебираем циклом наш масив;

        links[i].onclick = function(e) {        // каждому елементу масива на клик присваиваем;

            e.preventDefault();                 //убираем действие по умолчанию (быстрый скрол скачком к елементу);
            t = document.documentElement.scrollTop;     //в переменную t записуем на сколько документ проскролен в пикселях;
            var href = this.href.split('#')[1];     // находим знак #, и благодаря [1] берём всё что идёт после него (если был бы [0], взяли бы всё до него);
            h = document.getElementById( href ).getBoundingClientRect().top + document.documentElement.scrollTop;     // определяет растояние между топом документа и елементом к которому нужно прокрутить;
            smoothScroll();     // вызываем функцию, описаную ниже;
        }

    }

    function smoothScroll() {
        if (t < h) {    // проверяем, меньше ли текущий скрол, чем расположение елемента к которому нужно крутить;
            timer = setInterval( function() {   // записываем интервал на каждые 10 милисекунд в переменную (для того, что бы потом этот интервал можно было легко очистить);
                if( t>=h ) {                    // проверяем, докрутили ли мы до нашего елемента. Если да, то:;
                    clearInterval(timer);       // очищаем наш интервал
                    t = h;                      // приравниваем текущий скрол к растоянию от верха елемента к нашему;
                    window.scrollTo(0, t);      // запускаем событие скрол (где 0 - это скрол по оси икс, а t - скрол по оси игрик);
                    return;                     
                }
                window.scrollTo(0, t);  // запускаем событие скрол (где 0 - это скрол по оси икс, а t - скрол по оси игрик);
                t+=20;  // едем по 20 пикселей в секунду к нашей цели;
            }, 10);
        }
    }
    
} )();      // запускаем сами себя, благодаря ();



*/