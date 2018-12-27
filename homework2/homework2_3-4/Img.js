'use strict';

class Img {

    constructor(block) {
        this.block = document.getElementById(block);
    }

    render() {
        fetch('imgList.json')
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        this.block.innerHTML += `<a href="${data[i].srcMax}" target="_blank">\
                        <img src="${data[i].src}" alt = "${data[i].alt}"></a>`
                    }
                })
                .catch(err => console.error(err));
    }
}