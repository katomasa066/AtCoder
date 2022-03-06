'use strict'
function main(input){
const number = input

console.log(Math.round(number));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))