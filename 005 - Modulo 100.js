"use strict"
function main(input) {
    const number = input.split("\n");
    const N = number[0];
    const NN = number[1].split(" ");


    let result = 0;
    for (let i = 0; i < N; i++) {
        result += parseInt(NN[i]);
    }

    console.log(result % 100);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));