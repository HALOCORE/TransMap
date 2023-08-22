function f_gold(num) {
    var a = Math.floor(num / 3);
    var b = num % 3;
    return (b) ? [] : [a - 1, a, a + 1];
}

