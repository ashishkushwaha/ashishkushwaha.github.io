//jQuery doc ready
$(function () {

    //----------------------------------------
    // Intro Area
    //----------------------------------------

    //dynamic banner height
    (function () {
        $(".intro-banner").height($(window).height());

        $(window).resize(function () {
            $(".intro-banner").height($(window).height());
        });
    }());

    //parallax scrolling
    (function () {
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }());



}); //end of jQuery doc ready