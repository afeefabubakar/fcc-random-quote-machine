import quotes from "./quotes.js";

jQuery(function() {
    newQuote();

    function newQuote() {
        let item = Math.floor(Math.random()*quotes.length);;
        $(".quote-text").text(quotes[item].quote);
        $(".author-text").text('- ' + quotes[item].author);
    };

    function slide(slideValue) {
        $(".box").animate(
            {'left': '-=' + slideValue}, 
            1000, 
            "swing",
            function() {newQuote();}
        );
        $(".box").animate(
            {'left': '+=' +  slideValue}, 
            1000, 
            "swing",
            function() {$(".box").removeAttr("style")}
        );
    };

    $("#new-quote").on("click", function() {
        slide('130vw');
    });


    $("#new-quote").on("mouseenter", function(){
        $(this).css(
            {'cursor': 'pointer'}
        )
    });
});