'use strict'
function Main(input) {
const number = input
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))



'use strict'
function Main(input) {
    const number = input
    const one = input.trim().split('\n');
    let number0 = one[0].split('');
    let number1 = one[1].split('');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))

// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    tmp = input[1].split(" ");
    //文字列から10進数に変換するときはparseIntを使います
    var a = parseInt(input[0], 10);
    var b = parseInt(tmp[0], 10);
    var c = parseInt(tmp[1], 10);
    var s = input[2];
    //出力
    console.log('%d %s', a + b + c, s);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));






const numberList = '1,2,3'

// 普通にsplitすると文字列型の配列で返る
numberList.split(',')
// => ["1", "2", "3"]

// 下記のようにやると、数値型の配列で返る
numberList.split(',').map(Number)
// =>  [1, 2, 3]



//↓↓原理
numberList.split(',').map(n => {
    return Number(n)


})

// 引数で渡した文字を数値に変換して +1 して返す関数
const inc = n => {
    return Number(n) + 1
}

numberList.split(',').map(inc)
[2, 3, 4]