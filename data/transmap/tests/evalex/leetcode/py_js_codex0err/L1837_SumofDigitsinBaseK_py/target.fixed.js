function f_gold(n, k) {
    var res = 0;
    while (n != 0) {
        var t;
        [n, t] = [Math.floor(n / k), n % k];
        res += t;
    }
    return res;
}

