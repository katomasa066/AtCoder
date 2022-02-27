'use strict'
function main(input) {
    const number = input

    let ww = -(2 ** 31)
    let yy = 2 ** 31

    if (ww <= number && number < yy) {
        console.log('Yes')

    } else {
        console.log('No')
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))