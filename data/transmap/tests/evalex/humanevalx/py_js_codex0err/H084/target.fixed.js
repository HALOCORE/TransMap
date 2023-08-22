
function solve(N) {
    return parseInt(N.toString().split("").reduce((a, b) => +a + +b)).toString(2);
}

