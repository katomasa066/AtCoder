'use strict'
function Main(input) {

    const number = parseInt(input);
    let result = 2 * number + 3;

    console.log(result);

}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

/*
'use strict'
function Main(input) {

    const number = parseInt(input);
    

    console.log(2 * number +3);

}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

*/