'use strict'
function Main(input) {
    const number = input.trim().split(" ");
    let V = number[0];
    const F = number[1];
    const M = number[2];
    const T = number[3];

    while (true) {
        if (V < F) {
            console.log("F");
            break;
        }
        V = V - F;

        if (V < M) {
            console.log("M");
            break;
        }
        V = V - M;

        if (V < T) {
            console.log("T");
            break;
        }
        V = V - T;
    }

}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))


"use strict"
function Main(input) {
    const [V, ...A] = input.trim().split(" ").map(element => parseInt(element)) // 2 [4, 5, 4] 
    let v = V
    const famillyCodes = ['F', 'M', 'T']
    while (true) {
        for (const [index, num] of A.entries()) {
            if (v < num) {
                return console.log(famillyCodes[index])
            } else {
                v -= num
            }
        }
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))

// 関数
function momonga(a, d, v) {

}
// 無名関数
const momonnga = function () {

}
// 無名関数（アロー関数）
const momonga = (a, d, d) => {

}
//オブジェクト
const { b } = { a: 'a', b: 'b', c: 'c' }

// 分割代入
const [, v, , , a] = [1, 2, 3, 4, 5, 6]  // 配列

// スプレッド構文
const parent = [1, 2, 3]
const child = [...parent]
