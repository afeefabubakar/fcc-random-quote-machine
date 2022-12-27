import colors from "./colors.js";

function newColor() {
    let item = Math.floor(Math.random()*colors.length);
    $("body, .button").css({'background-color': '#' + colors[item]});
    $(".twitter-logo").css({'color': '#' + colors[item]});
}

export default newColor;