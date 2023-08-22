function f_gold(n) {
    var a = Math.floor(n / 7);
    var b = n % 7;
    return (28 + 28 + 7 * (a - 1)) * a / 2 + (a * 2 + b + 1) * b / 2;
}

