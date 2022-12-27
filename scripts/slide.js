import newQuote from "./newquote.js";

function slide(slideValue = '130vw') { //Higher slide value ensures elements are out of the viewport but might take longer
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
        function() {$(".box").removeAttr("style")} //Removed style attribute to ensure the element remains centered
    );
};

export default slide;