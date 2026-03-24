document.getElementById("submit-button").addEventListener("click", event => {
    event.preventDefault();
    const inputText = document.getElementById("input-text").value;

    fetch('request', {
        method: 'POST',
        body: inputText,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => {
        document.getElementById("input-text").value = '';
        document.getElementById("submit-button").disabled = true;
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
});

document.getElementById('input-text').addEventListener('keyup', event => {
    document.getElementById("submit-button").disabled = document.getElementById("input-text").value.trim() === "";
});


// https://www.w3schools.com/W3CSS/tryit.asp?filename=tryw3css_slideshow_dots2
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}


function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        // @ts-ignore
        x[i].style.display = "none";
    }
    // @ts-ignore
    x[slideIndex-1].style.display = "block";
}

var slideIndex2 = 2;
showDivs2(slideIndex2);

function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
}


function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    if (n > x.length-1) {slideIndex2 = x.length-1}
    if (n < 2) {slideIndex2 = 2}
    for (i = 0; i < x.length; i++) {
        // @ts-ignore
        x[i].style.display = "none";
    }
    // @ts-ignore
    x[slideIndex2-1].style.display = "grid";
    x[slideIndex2-1].style.scale = 1.0;
    x[slideIndex2-2 < 0 ? x.length-1 : slideIndex2-2].style.display = "grid";
    x[slideIndex2 === x.length ? 0 : slideIndex2].style.display = "grid";
    x[slideIndex2-2 < 0 ? x.length-1 : slideIndex2-2].style.scale = 0.8;
    x[slideIndex2 === x.length ? 0 : slideIndex2].style.scale = 0.8;
}
