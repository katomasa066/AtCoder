'use strict'
function Main(input) {

    const number = input.split(" ");

    const X = number[0];
    const Y = number[1];


    const numN = parseInt(X);
    const numS = parseInt(Y);


    let result = 0;
    for (let i = 1; i <= numN; i++) {
        for(let j = 1; j <= numN; j++){
         if(i + j <= numS){
             result += 1;
         }   
        }
    }



    console.log(result);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))