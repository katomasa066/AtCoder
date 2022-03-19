'use strict'
function Main(input) {

    const number = parseInt(input);
    const apple = 5;

    console.log(number + apple);

}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
