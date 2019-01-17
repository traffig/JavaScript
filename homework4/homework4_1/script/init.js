'use strict';

let $textBlock = $('.textBlock');
$('.menu').each((ind, item) => {
    $(item).on('click', () => {
        $('li').eq(ind).addClass('activeMenu').siblings().removeClass('activeMenu');
        $textBlock.eq(ind).slideDown(500).siblings().hide();
    })
});