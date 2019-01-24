'use strict';


let cart = new Cart('../getCart.json');
$('.btnAdd').on('click', e => {
    cart.addProduct(e.target);
});
