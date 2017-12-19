$(function () {
    var timer;
    var fadeInBuffer = true;
    $(document).mousemove(function () {
        if (!fadeInBuffer) {
            if (timer) {
                clearTimeout(timer);
                timer = 0;
            }
            $('.fade-object').fadeIn();
            $('html').css({
                cursor: ''
            });
        } else {
            fadeInBuffer = false;
        }


        timer = setTimeout(function () {
            $('.fade-object').fadeOut()
            $('html').css({
                cursor: 'none'
            });
            fadeInBuffer = true;
        }, 5000)
    });
});
