$(document).ready(function () {
    $('.news-slide').slick({
        infinite: true,
        dots: true,
    });
});


// $(document).ready(function () {
//     $("#notif").click(function (e) {
//         $('.body').toggleClass('open');
//         e.stopPropagation()
//     });

//     $(document).click(function (e) {
//         if (!$(e.target).hasClass('body')) $(".body").removeClass('open');
//     });
// });

$(".notif").click(function (e) {
    e.stopPropagation();
    $(".body").toggleClass('open');
});

$(document).click(function (e) {
    if (!$(e.target).closest('.body').length) {
        $(".body").removeClass('open');
    }
});


