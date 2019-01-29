'use strict';

$('.shopping-action-del').on('click', e => {
    let id = $(e.currentTarget).data('product_btn_id');
    $(e.currentTarget).closest(`div[data-product_cart_id=${id}]`).remove();
});

$('.shopping-button-clear').on('click', e => {
    e.preventDefault();
    $('div[data-product_cart_id]').remove();
});