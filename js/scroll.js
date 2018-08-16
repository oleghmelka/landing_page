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





