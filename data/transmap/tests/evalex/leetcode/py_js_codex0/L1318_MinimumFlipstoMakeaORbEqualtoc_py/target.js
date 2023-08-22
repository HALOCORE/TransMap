function f_gold(a, b, c) {
    var ans = 0;
    for (var i = 0; i < 31; i++) {
        var x = (a >> i) & 1;
        var y = (b >> i) & 1;
        var z = (c >> i) & 1;
        if ((x | y) == z) {
            continue;
        }
        if (x == 1 && y == 1 && z == 0) {
            ans += 2;
        }
        else {
            ans += 1;
        }
    }
    return ans;
}

