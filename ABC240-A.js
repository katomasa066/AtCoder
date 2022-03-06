'use strict'
function Main(input) {
const split = input.split(" ");
const x = split[0];
const y = split[1];

const result = x - y;

 if (result == 1 || result == -1 || result == 9 || result == -9) {
        console.log("Yes");
} else {
        console.log("No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
