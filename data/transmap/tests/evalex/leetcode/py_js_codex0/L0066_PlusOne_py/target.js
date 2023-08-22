function f_gold(digits) {
    var n = digits.length;
    for (var i = n - 1; i >= 0; i--) {
        digits[i] += 1;
        digits[i] %= 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    return [1].concat(digits);
}

