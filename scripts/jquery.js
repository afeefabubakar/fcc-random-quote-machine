import newQuote from "./newquote.js";
import slide from "./slide.js";

jQuery(function() {
    newQuote();
    
    $("#new-quote").on("click", function() {
        slide('130vw');
    });

    $("#new-quote").on("mouseenter", function(){
        $(this).css(
            {'cursor': 'pointer'}
        )
    });
});