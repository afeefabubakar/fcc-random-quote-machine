import newQuote from "./newquote.js";

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

export default slide;