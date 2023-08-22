function f_gold(n) {
    var v = 1;
    var ans = [];
    for (var i = 0; i < n; i++) {
        ans.push(v);
        if (v * 10 <= n) {
            v *= 10;
        }
        else {
            while (v % 10 == 9 || v + 1 > n) {
                v /= 10;
            }
            v += 1;
        }
    }
    return ans;
}

