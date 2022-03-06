function main(input) {
    const h = Number(input);

    console.log(Math.sqrt(h * (12800000 + h)));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));