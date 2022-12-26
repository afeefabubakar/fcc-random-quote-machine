jQuery(function() {
    $("#new-quote").on("click", function() {
        $(".quote-text").text('"Lorem ipsum dolor sit amer! I am a test string! Please don\'t mind me here okay? Just keep doing whatever you were doing before."')
    })

    $(".quote-text").on("mouseleave", function() {
        $(".quote-text").text("Hello there!")
    })
});