'use strict';

document.getElementById('myform').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name');
    const invalidName = document.getElementById('invalidName');
    const numberPhone = document.getElementById('numberPhone');
    const invalidPhone = document.getElementById('invalidPhone');
    const mail = document.getElementById('mail');
    const invalidMail = document.getElementById('invalidMail');
    const message = document.getElementById('message');
    const invalidMessage = document.getElementById('invalidMessage');
    Validation.isValidName(name, invalidName);
    Validation.isValidNumberPhone(numberPhone, invalidPhone);
    Validation.isValidMail(mail, invalidMail);
    Validation.isValidMessage(message, invalidMessage);
});