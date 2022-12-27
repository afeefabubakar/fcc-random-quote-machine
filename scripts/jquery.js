import newQuote from "./newquote.js";
import newColor from "./newcolor.js";
import slide from "./slide.js";

jQuery(function() {
    newQuote();
    newColor();
    
    $(".button").on("click", function() {
        slide('130vw');
        newColor();
    });

    $(window).on("keypress", function(event) {
        if(event.which == 13) {
            slide('130vw');
            newColor();
        }
    });

    $(".button").on("mouseenter", function(){
        $(this).css(
            {
                'filter': 'brightness(120%)'
            }
        )
    });

    $(".button").on("mouseleave", function(){
        $(this).css(
            {
                'filter': 'brightness(100%)'
            }
        )
    });
});