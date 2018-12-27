'use strict';


let block = document.getElementById('menu');
const btnRemove = document.getElementById('removeMenu');

let menu = new Menu('my', 'my', [
    new MenuItem('/', 'Home'),
    new MenuItem('/about', 'About'),
    new MenuItem('/policy', 'Policy'),
    new SubMenu('/company', 'Company', 'subMenuHead', [
        new MenuItem('/about', 'About'),
        new MenuItem('/policy', 'Policy'),
        new SubMenu('/company', 'Company', 'subMenuBody', [
            new MenuItem('/about', 'About'),
            new MenuItem('/policy', 'Policy'),
        ]),
    ]),
    new MenuItem('/blog', 'Blog'),
]);

btnRemove.addEventListener('click', () => menu.removeMenu());
block.innerHTML = menu.render();