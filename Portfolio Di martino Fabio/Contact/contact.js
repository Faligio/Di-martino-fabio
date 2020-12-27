window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.backgroundColor = 'black';

    } else {
        document.getElementById("navbar").style.backgroundColor = 'white';

    }
})

window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.color = 'white';
    } else {
        document.getElementById("navbar").style.color = 'black';
    }
})