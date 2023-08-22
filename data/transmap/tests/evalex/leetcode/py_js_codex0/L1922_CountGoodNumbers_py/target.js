function f_gold(n) {
    var mod = Math.pow(10, 9) + 7;
    function myPow(x, n) {
        var res = 1;
        while (n) {
            if ((n & 1) == 1) {
                res = res * x % mod;
            }
            x = x * x % mod;
            n >>= 1;
        }
        return res;
    }
    return myPow(5, (n + 1) >> 1) * myPow(4, n >> 1) % mod;
}

