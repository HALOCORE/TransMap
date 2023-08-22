function f_gold(n) {
    var ans = 0;
    var j = -1;
    for (var i = 0; i < 32; i++) {
        if (n & 1) {
            if (j != -1) {
                ans = Math.max(ans, i - j);
            }
            j = i;
        }
        n >>= 1;
    }
    return ans;
}

