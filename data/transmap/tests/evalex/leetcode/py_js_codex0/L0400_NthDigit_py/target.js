function f_gold(n) {
    var bits, t = 1, t = 9;
    while (n > bits * t) {
        n -= bits * t;
        bits += 1;
        t *= 10;
    }
    var start = Math.pow(10, bits - 1) + (n / bits) - 1;
    if (n % bits == 0) {
        return start % 10;
    }
    return parseInt(String((start + 1)).charAt((n % bits) - 1));
}

