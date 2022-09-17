(function ($) {
    "use strict";
    var main_wind = $(window);
    var wWidth = $(window).width();

    jQuery(document).ready(function ($) {
        //----------moving to welcome section on clicking mouse icon---------
        $("#goDown").on("click", function () {
            $("html, body").animate({
                scrollTop: $("#demo_section").offset().top - 0 + 'px'
            }, 1200);
        });
        
        //-----------------auto year change------------
        var new_date = new Date();
        var new_year = new_date.getFullYear();
        $(".update-year").append(new_year);


    });

    main_wind.on('load', function () {
        $('#loading').fadeOut('slow');
    });



}(jQuery));
