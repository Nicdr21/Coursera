$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenwidth = window.innerWidth;
        if (screenwidth , 768) {
            $("#collapsed-nav").collapse('hide');
        }
    });
});