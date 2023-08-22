function f_gold(candidates) {
    var ans = 0;
    for (var i = 0; i < 32; i++) {
        var t = 0;
        for (var x of candidates) {
            t += (x >> i) & 1;
        }
        ans = Math.max(ans, t);
    }
    return ans;
}

