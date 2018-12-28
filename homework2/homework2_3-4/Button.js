'use strict';

class Button {
    static statErr() {
        fetch('statList.json')
            .then(statList => {
                return statList.json();
            })
            .then(statErr => {
                console.log(statErr[1].result);
            })
            .catch(err => {
                console.error(err);
            });
    }

    static statOk() {
        fetch('statList.json')
            .then(statList => {
                return statList.json();
            })
            .then(statOk => {
                console.log(statOk[0].result);
            })
            .catch(err => {
                console.error(err);
            });
    }
}