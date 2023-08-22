function f_gold(bits) {
    var i = 0;
    var n = bits.length;
    while (i < n - 1) {
        i += bits[i] + 1;
    }
    return i == n - 1;
}

