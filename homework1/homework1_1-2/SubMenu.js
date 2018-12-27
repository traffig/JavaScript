'use strict';


class SubMenu extends MenuItem {
    constructor(href, title, subItems) {
        super(href, title);
        this.subItems = subItems;
    }

    /**
     * Функция создает элемент меню с вложенными подменю
     * @returns {string} возвращает готовую HTML разметку для элемента меню с подменю
     */
    render() {
        let result = `<li><a href="${this.href}">${this.title}</a><ul>`;
        for (let i = 0; i < this.subItems.length; i++) {
            result += this.subItems[i].render();
        }
        result += `</ul></li>`;
        return result;
    }
}