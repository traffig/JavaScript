'use strict';

class Validation {

    /**
     * Метод устанавливает класс для правильно заполненного поля
     * @param id {object} input | textarea с HTML страницы полученный по id
     */
    static setValidClass(id) {
        if (!id.classList.contains('valid')) {
            id.classList.add('valid');
        }
        if (id.classList.contains('invalid')) {
            id.classList.remove('invalid');
        }
    }

    /**
     * Метод устанавливает класс для неправильно заполненного поля
     * @param id {object} input | textarea с HTML страницы полученный по id
     */
    static setInvalidClass(id) {
        if (!id.classList.contains('invalid')) {
            id.classList.add('invalid');
        }
        if (id.classList.contains('valid')) {
            id.classList.remove('valid');
        }
    }

    /**
     * Метод проверяет и показывает правильность заполнения имени пользователя
     * @param name {object} input с именем пользователя полученный по id
     * @param invalidName {object} span элемент для вывода сообщения о неправильности ввода имени пользователя
     */
    static isValidName(name, invalidName) {
        if (/^[a-zA-Zа-яА-ЯЁё]{4,30}$/.test(name.value)) {
            Validation.setValidClass(name);
            name.value = name.value.replace(/^([a-zA-Zа-яА-ЯЁё]{4,30})$/, '$&');
            invalidName.innerText = '';
        } else {
            Validation.setInvalidClass(name);
            invalidName.innerText = ' - Ошибка, имя должно содержать от 4 до 30 символов английского / русского языка';
        }
    }

    /**
     * Метод проверяет и показывает правильность заполнения номера телефона
     * @param numberPhone {object} input с номером телефона полученный по id
     * @param invalidPhone {object} span элемент для вывода сообщения о неправильности ввода номера телефона
     */
    static isValidNumberPhone(numberPhone, invalidPhone) {
        if (/^[-( ]?\d{3}[-) ]? ?\d{3}[- ]?\d{2}[- ]?\d{2}$/.test(numberPhone.value)) {
            numberPhone.value = numberPhone.value
                .replace(/^[-( ]?(\d{3})[-) ]? ?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/, '+7($1)$2-$3$4');
            Validation.setValidClass(numberPhone);
            invalidPhone.innerText = '';
        } else if (/^\+?[78][-( ]?\d{3}[-) ]? ?\d{3}[- ]?\d{2}[- ]?\d{2}$/.test(numberPhone.value)) {
            numberPhone.value = numberPhone.value
                .replace(/^\+?[78][-( ]?(\d{3})[-) ]? ?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/, '+7($1)$2-$3$4');
            Validation.setValidClass(numberPhone);
            invalidPhone.innerText = '';
        } else {
            Validation.setInvalidClass(numberPhone);
            invalidPhone.innerText = ' - Ошибка, введите 10-и / 11-и значный номер телефона';
        }
    }

    /**
     * Метод проверяет и показывает правильность заполнения почтового ящика
     * @param mail {object} input с почтовым ящиком полученный по id
     * @param invalidMail {object} span элемент для вывода сообщения о неправильности ввода почтового ящика
     */
    static isValidMail(mail, invalidMail) {
        if (/^\w+(.|-)?\w+@\w+\.(ru|com)$/.test(mail.value)) {
            Validation.setValidClass(mail);
            mail.value = mail.value.replace(/(^\w+(.|-)?\w+@\w+\.(ru|com)$)/, '$&');
            invalidMail.innerText = '';
        } else {
            Validation.setInvalidClass(mail);
            invalidMail.innerText = ' - Введен неверный адрес электронной почты';
        }
    }

    /**
     * Метод проверяет и показывает правильность заполнения поля для сообщения
     * @param message {object} textarea с сообщением полученный по id
     * @param invalidMessage {object} span элемент для вывода сообщения о неправильности ввода сообщения
     */
    static isValidMessage(message, invalidMessage) {
        if (/[\w+а-яА-ЯЁё]/i.test(message.value)) {
            Validation.setValidClass(message);
            invalidMessage.innerText = '';
        } else {
            Validation.setInvalidClass(message);
            invalidMessage.innerText = ' - Введите сообщение...';
        }
    }
}
