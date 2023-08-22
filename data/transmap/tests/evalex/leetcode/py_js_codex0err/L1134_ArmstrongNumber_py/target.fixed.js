function f_gold(n) {
    var k = n.toString().length;
    var s = 0;
    var t = n;
    while (t) {
        var v;
        [t, v] = [Math.floor(t / 10), t % 10];
        s += Math.pow(v, k);
    }
    return n == s;
}

