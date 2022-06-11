"use strict"
function Main(input) {
    const A = parseInt(input);
    let i = 1;
    let ans = 1;
    for(i;i<=A;i++){
        ans = ans*i;
    }
    console.log(ans);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))