"use strict"
function Main(input) {
  const t =parseInt(input);
  const t1 = t * t + 2 * t + 3; //f(t)
  const t2 = t1 + t; //f(t)+t
  const t3 = t2 * t2 + 2 * t2 + 3; // f(f(t)+t)
  const t4 = t1 * t1 + 2 * t1 + 3; // f(f(t))
  const t5 = t3 + t4; //f(f(t)+t)+f(f(t))
  const t6 = t5 * t5 + 2 * t5 + 3; //f(f(f(t)+t)+f(f(t)))

  console.log(t6);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))



"use strict"
function Main(input) {
  const t = parseInt(input);
  function f(t) {
    return t ** 2 + 2 * t + 3;
  }
  console.log(f(f(f(t) + t) + f(f(t))));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))