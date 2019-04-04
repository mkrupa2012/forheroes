document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');

    $read = $('.read-more').click(function (e) {
        e.preventDefault();
        $(this).prev().slideToggle("slow", function () {
        })
    });
});