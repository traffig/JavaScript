'use strict';


const btn = document.getElementById('btnPrice');
let hamburger = new Hamburger('hamburgerSize', 'filling', 'calory', 'price', 'quantity');
btn.addEventListener('click', () => hamburger.getToCalc());