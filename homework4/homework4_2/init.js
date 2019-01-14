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
let $citySelect = $('#city');
$.ajax({
    url: 'city.json',
    type: 'GET',
    dataType: 'json',
    success: data => {
        for (let city of data) {
            let $city = `<option>${city.name}</option>`;
            $citySelect.append($city);
        }
    },
    error: error => {
        console.log('Ошибка!')
    }
});