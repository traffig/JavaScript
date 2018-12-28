'use strict';


class SubMenu extends MenuItem {
    constructor(href, title, className, subItems) {
        super(href, title);
        this.className = className;
        this.subItems = subItems;
    }

    /**
     * Функция создает элемент меню с вложенными подменю
     * @returns {string} возвращает готовую HTML разметку для элемента меню с подменю
     */
    render() {
        let result = `<li><a href="${this.href}">${this.title}</a><div class="${this.className}"><ul class="subMenu">`;
        for (let i = 0; i < this.subItems.length; i++) {
            result += this.subItems[i].render();
        }
        result += `</ul></div></li>`;
        return result;
    }
}