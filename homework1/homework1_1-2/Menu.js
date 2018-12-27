'use strict';


class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    /**
     * Метод создает меню и подменю
     * @returns {string} возвращает строку с тегами в HTML
     */
    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof SubMenu) {
                result += this.items[i].render();
            } else if (this.items[i] instanceof MenuItem) {
                result += this.items[i].render();
            }
        }
        result += '</ul>';
        return result;
    }

    /**
     * Метод удаляет дочернии элементы из переданного блока
     * @param {object} parentBlock передается блок в котором происходило заполнение меню
     */
    static removeMenu(parentBlock) {

        // Вариант №1

        while (parentBlock.firstChild) {
            parentBlock.removeChild(parentBlock.firstChild);
        }

        //Вариант №2

        // parentBlock.childNodes.forEach(function (elem) {
        //    elem.remove();
        // });
        console.log('remove finish!');
    }
}