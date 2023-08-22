function f_gold(n) {
    var k = n.toString().length;
    var s = 0;
    var t = n;
    while (t) {
        var t = Math.floor(t / 10);
        var v = t % 10;
        s += Math.pow(v, k);
    }
    return n == s;
}

