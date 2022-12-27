import quotes from "./quotes.js";

function newQuote() {
    let item = Math.floor(Math.random()*quotes.length);;
    $(".quote-text").text(quotes[item].quote);
    $(".author-text").text('- ' + quotes[item].author);
};

export default newQuote;