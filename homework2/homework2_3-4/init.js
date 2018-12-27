'use strict';


    const img = new Img('img-block');
    document.getElementById('btnError').addEventListener('click', () => Button.statErr());
    document.getElementById('btnSuccess').addEventListener('click', () => Button.statOk());

    img.render();
