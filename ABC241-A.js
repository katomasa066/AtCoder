"use strict"
function Main(input) {
    const num = input.trim().split(" ");
    let disp = 0;
    

    for (let i = 0; i < 3; i++) {
        disp = num[disp];
    }

    console.log(disp);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));