import quotes from "./quotes.js";

jQuery(function() {
    $(".quote-text").text(quotes[0].quote);
    $(".author-text").text('- ' + quotes[0].author);

    function newQuote() {
        $(".box").animate(
            {left: '+=100vw'}, 
            500, 
            "swing", 
            function() {$(".box").removeAttr("style")}
        );
        let item = Math.floor(Math.random()*quotes.length);
        $(".quote-text").text(quotes[item].quote);
        $(".author-text").text('- ' + quotes[item].author);
    };

    $("#new-quote").on("click", function() {
        $(".box").animate(
            {left: '-=100vw'}, 
            1000, 
            "swing", 
            function() {newQuote();}
        );
    });

    $("#new-quote").on("mouseenter", function(){
        $(this).css(
            {'cursor': 'pointer'}
        )
    });
});