function f_gold(n, k) {
    var res = 0;
    while (n != 0) {
        n = Math.floor(n / k);
        res += n % k;
    }
    return res;
}

