$(document).ready(function () {
    $('.thumb-item').mouseenter(function(){
        $('.is-active').removeClass('is-active');
        $(this).find('img').addClass('is-active');
        let path = $(this).find('img').attr('src');
        $('.main img').attr('src', path.replace('_small', '_large'));
    })
})