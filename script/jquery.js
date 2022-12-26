import quotes from "./quotes.js";

jQuery(function() {
    $(".quote-text").text(quotes[0].quote);
    $(".author-text").text('- ' + quotes[0].author);

    $("#new-quote").on("click", function() {
        let item = 0;
        let previousItem = 0;
        while (item == previousItem) {
            console.log(item, previousItem);
            previousItem = item;
            item =  Math.floor(Math.random()*quotes.length);
        }
        $(".quote-text").text(quotes[item].quote);
        $(".author-text").text('- ' + quotes[item].author);
    });

    $("#new-quote").on("mouseenter", function(){
        $(this).css(
            {'cursor': 'pointer'}
        )
    });
});