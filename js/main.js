$(function () {
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    $("body").on('click', '[href*="#"]', function (event) {
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
        event.preventDefault();
        nav.removeClass("show");
    });

    $("[data-works]").on("click", function (event) {
        event.preventDefault();
        $("[data-works]").removeClass("btn--active");
        $(this).toggleClass("btn--active");
    });

});
