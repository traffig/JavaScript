'use strict';

class Cart {
    constructor(source, container = '#cart') {
        this.source = source;
        this.container = container;
        this.countGoods = 0; // Общее кол-во товаров в корзине
        this.amount = 0; // Общая стоимость товаров в корзине
        this.cartItems = []; // Все товары
        this._init();
    }

    _init() {
        this._render();
        fetch(this.source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents) {
                    this.cartItems.push(product);
                    this._renderItem(product);
                }
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this._renderSum();
            })
    }

    _render() {
        let $cartDrop = $('<div/>', {
            class: 'cart-drop'
        });
        let $cartItems = $('<div/>', {
            class: 'cart-items'
        });
        let $totalGoods = $('<div/>', {
            class: 'cart-countGoods'
        });
        let $totalPrice = $('<div/>', {
            class: 'cart-total'
        });
        let $btnCheckout = $('<a/>', {
            class: 'cart-checkout',
            href: 'checkout.html',
            text: 'checkout'
        });
        let $btnGoToCart = $('<a/>', {
            class: 'cart-goToCart',
            href: 'shopping_cart.html',
            text: 'go to cart'
        });
        $totalGoods.append($(`<span class="sum-goods">0</span>`));
        $totalPrice.append($(`<span>total</span><span class="sum-price">$0</span>`));
        $totalGoods.appendTo($(this.container));
        $cartItems.appendTo($cartDrop);
        $totalPrice.appendTo($cartDrop);
        $btnCheckout.appendTo($cartDrop);
        $btnGoToCart.appendTo($cartDrop);
        $cartDrop.appendTo($(this.container));
    }

    _renderItem(product) {
        let $container = $('<div/>', {
            class: 'cart-item',
            'data-product': product.id_product
        });
        let $itemWrap = $('<div/>', {
            class: 'cart-itemWrapper'
        });
        let $itemText = $('<div/>', {
            class: 'cart-text'
        });
        $itemWrap.append($(`<img src="${product.src}" alt="photo" class="cart-img">`));
        $itemText.append($(`<p class="cart-textName">${product.product_name}</p>`));
        $itemText.append($(`<p class="cart-textPrice">${product.quantity} x $${product.price}</p>`));
        $itemText.appendTo($itemWrap);
        $itemWrap.appendTo($container);
        let $delBtn = $(`<div class="cart-btnRemove-wrapper">
        <a href="#" class="cart-btnRemove"><i class="fas fa-times-circle"></i></a></div>`);
        $delBtn.click(() => {
            this._remove(product.id_product)
        });
        $container.append($delBtn);
        $container.appendTo($('.cart-items'));
    }

    _renderSum() {
        $('.sum-goods').text(`${this.countGoods}`);
        $('.sum-price').text(`$${this.amount}`);
    }

    _updateCart(product) {
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.cart-textPrice').text(`${product.quantity} x $${product.quantity * product.price}`);
    }

    addProduct(element) {
        let productId = +$(element).data('id');
        if (!isNaN(productId)){
            let find = this.cartItems.find(product => product.id_product === productId);
            if (find) {
                find.quantity++;
                this.countGoods++;
                this.amount += find.price;
                this._updateCart(find);
            } else {
                let product = {
                    id_product: productId,
                    product_name: $(element).data('name'),
                    price: +$(element).data('price'),
                    quantity: 1,
                    src: $(element).data('src')
                };
                this.cartItems.push(product);
                this._renderItem(product);
                this.amount += product.price;
                this.countGoods += product.quantity;
            }
        } else {
            return;
        }
        this._renderSum();
    }

    _remove(id) {
        let find = this.cartItems.find(product => product.id_product === id);
        if (find.quantity > 1) {
            find.quantity--;
            this._updateCart(find);
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            $(`div[data-product="${id}"]`).remove();
        }
        this.countGoods--;
        this.amount -= find.price;
        this._renderSum();
    }
}