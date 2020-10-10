document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("header_two").style.height = "10vh";
        } else {
            document.getElementById("header_two").style.height = "20vh";
        }
    })
})