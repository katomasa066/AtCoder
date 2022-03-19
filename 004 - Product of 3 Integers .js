'use strict'
function Main(input) {

    const number = input.split(" ");

    const X = number[0];
    const Y = number[1];
    const Z = number[2];

    const numX = parseInt(X);
    const numY = parseInt(Y);
    const numZ = parseInt(Z);


    console.log(numX * numY * numZ);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))