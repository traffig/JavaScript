'use strict';


class Hamburger {
    constructor(hamburgerSize, filling, textCalory, textPrice, quantity) {
        this.hamburgerSize = document.getElementById(hamburgerSize);
        this.filling = document.getElementsByName(filling);
        this.textCalory = document.getElementById(textCalory);
        this.textPrice = document.getElementById(textPrice);
        this.quantity = document.getElementById(quantity);
    }

    /**
     * Метод расчитывает калорийность гамбургера
     * @returns {number} возвращает калории
     */
    getCalory() {
        let calory = +this.hamburgerSize.options[hamburgerSize.selectedIndex].dataset.calory;
        this.filling.forEach(function (element) {
            if (element.checked) {
                calory += +element.dataset.calory
            }
        });
        return calory;
    }

    /**
     * Метод расчитывает общую стоимость заказа
     * @returns {number} возвращает сумму
     */
    getPrice() {
        let price = +this.hamburgerSize.options[hamburgerSize.selectedIndex].dataset.price;
        //Вариант №1
        // for (let i = 0; i < this.filling.length; i++) {
        //     if (this.filling[i].checked) {
        //         price += +this.filling[i].dataset.price;
        //     }
        // }
        //Вариант №2
        this.filling.forEach(function (element) {
            if (element.checked) {
                price += +element.dataset.price
            }
        });
        return price * this.quantity.value;
    }

    /**
     * Метод передает в HTML полученные калории и сумму
     */
    getToCalc() {
        this.textCalory.textContent = this.getCalory().toString();
        this.textPrice.textContent = this.getPrice().toString();
    }
}