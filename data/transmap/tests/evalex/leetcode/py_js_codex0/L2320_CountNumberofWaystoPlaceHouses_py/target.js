function f_gold(n) {
    var mod = Math.pow(10, 9) + 7;
    var f = new Array(n);
    for (var i = 0; i < n; i++) {
        f[i] = new Array(2);
    }
    f[0] = [1, 1];
    for (var i = 1; i < n; i++) {
        f[i][0] = f[i - 1][0] + f[i - 1][1];
        f[i][1] = f[i - 1][0];
    }
    var s = f[n - 1][0] + f[n - 1][1];
    return (s * s) % mod;
}

