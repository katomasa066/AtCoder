'use strict'
function main(input) {
const number = input

function levelone(syokyu) {
    console.log(40 - syokyu);
}

function leveltwo(cyukyu) {
    console.log(70 - cyukyu);
}

function levelthree(jyokyu){
    console.log(90 - jyokyu);
}


if (number >= 90){
    console.log("expert")
} else if (number >= 70 && 90 > number) {
        levelthree(number)

} else if (number >= 40 && 70 > number) {
        leveltwo(number)

} else if (number >= 0 && 40 > number) {
        levelone(number)

} else {
        console.log("error");
}

}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))




