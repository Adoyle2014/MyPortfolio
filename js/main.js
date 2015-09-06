
$(document).ready(function() {

    linkSlide();
    navbarChange();

    function navbarChange() {
        var navbar = $(".navbar-wrapper").offset().top;
        var wrapper = $(".navbar-wrapper");

        $(document).scroll(function () {
            if ($(this).scrollTop() > navbar) {
                $(wrapper).css({
                    "height": "50px"
                });
                $("#logo-tall").css({
                    "display": "none"
                });
                $("#logo-wide").css({
                    "display": "block"
                });
                $(".nav-first-a").css({
                    "display": "none"
                });
                $(".nav-last-a").css({
                    "top": "-13px"
                });
                $(".nav-li").css({
                    "height": "42px"
                });


            } else {
                $(wrapper).css({
                    "height": "100px"
                });
                $("#logo-tall").css({
                    "display": "block"
                });
                $("#logo-wide").css({
                    "display": "none"
                });
                $(".nav-first-a").css({
                    "display": "block"
                });
                $(".nav-last-a").css({
                    "top": "-20px"
                });
                $(".nav-li").css({
                    "height": "92px"
                });
            }
        });

    }



    function linkSlide() {
        $(".social-link").on('mouseenter mouseleave', function (e) {
            $(this).stop().animate({marginLeft: e.type == "mouseenter" ? 145 : 0}, 500);
        });
    }




});




