function f_gold(n) {
    var mx = Math.pow(10, n) - 1;
    for (var a = mx; a > Math.floor(mx / 10); a--) {
        var x = a;
        var b = x;
        while (b) {
            x = x * 10 + b % 10;
            b = Math.floor(b / 10);
        }
        var t = mx;
        while (t * t >= x) {
            if (x % t == 0) {
                return x % 1337;
            }
            t -= 1;
        }
    }
    return 9;
}

