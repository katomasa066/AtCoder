"use strict"
function Main(input) {
    const n = input.trim().split(" ").map(element => parseInt(element));

    if (2 ** n > n ** 2) {
        console.log("Yes");

    } else {
        console.log("No");
    }


}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))