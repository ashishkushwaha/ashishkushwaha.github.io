//jQuery doc ready
$(function () {

    //----------------------------------------
    // Init wow JS
    //----------------------------------------
    (function () {
        new WOW().init();
    }());

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

    //Typing skill Hashtags - using Typed.js
    (function () {
        var passions = ["#Web Apps", "#JavaScript", "#SharePoint", "#Frontend Dev", "#HTML5", "#CSS", "#Responsive Web Design", "#Photoshop", "#REST", "#JSON", "#Gamer", "#Geek", "#PCMasterRace"];

        $(".typing-area").typed({
            strings: passions,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 2000,
            loop:true
        });
    }());

}); //end of jQuery doc ready