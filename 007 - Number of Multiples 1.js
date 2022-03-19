'use strict'
function Main(input) {

    const number = input.split(" ");

    const X = number[0];
    const Y = number[1];
    const Z = number[2];

    const numX = parseInt(X);
    const numY = parseInt(Y);
    const numZ = parseInt(Z);

    let result = 0;
    for(let i = 1; i <= numX; i++ ){
        if (i % numY === 0 || i % numZ === 0){
            result += 1;
        }
    }
    
    

    console.log(result);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


