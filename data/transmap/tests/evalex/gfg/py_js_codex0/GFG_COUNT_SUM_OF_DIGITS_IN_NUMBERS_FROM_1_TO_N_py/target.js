function f_gold(n) {
    if (n < 10) return (n * (n + 1) / 2);
    var d = (Math.trunc(Math.log10(n)));
    var a = Array(d + 1).fill(0);
    a[0] = 0;
    a[1] = 45;
    for (var i = 2; i < d + 1; i++) a[i] = a[i - 1] * 10 + 45 * (Math.trunc(Math.ceil(Math.pow(10, i - 1))));
    var p = (Math.trunc(Math.ceil(Math.pow(10, d))));
    var msd = Math.trunc(n / p);
    return (Math.trunc(msd * a[d] + (msd * (msd - 1) / 2) * p + msd * (1 + n % p) + f_gold(n % p)));
}

