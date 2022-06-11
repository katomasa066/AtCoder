"use strict"
function Main(input) {
    let [S, b] = input.trim().split(" ")


    console.log(S)

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))

"use strict"
function Main(input) {
    let [S, AB] = input.trim().split("\n");
    let [A, B] = AB.trim().split(" ");
    //chokudai
    let o = S[A];
    let u = S[B];
    console.log(u + o);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))