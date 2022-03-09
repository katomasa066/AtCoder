'use strict'
function Main(input) {
    const number = input
    var a = Math.floor(number / 100);
    var b =  number % 100;

    if (b != 0){
        a = a + 1;
    }else{
        ;
    }


    console.log(a);

}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
