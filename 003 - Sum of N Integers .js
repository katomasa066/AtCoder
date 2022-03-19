/*
'use strict'
function Main(input) {

    const number = input.trim().split("\n");
    const N = number[0];
    const NN = number[1].split(" ");
    


}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
*/


"use strict"
function main(input) {
    const number = input.split("\n");
    // 3 , 2 3 4
    const N = number[0];
    //N=3
    const NN = number[1].split(" ");
    //NN = 2 3 4

    let result = 0;
    for (let i = 0; i < N; i++) {
        result += parseInt(NN[i]);
    }

    console.log(result);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));