$(document).ready(function(){

var work = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    work++;
    if (work > x.length) {work = 1}
    x[work-1].style.display = "block";
    setTimeout(carousel, 2500);
}
})

