function f_gold(n) {
    var cnt = [1, 1, 1, 1, 1];
    for (var i = 2; i <= n; i++) {
        for (var j = 3; j >= 0; j--) {
            cnt[j] += cnt[j + 1];
        }
    }
    return cnt.reduce(function (a, b) { return a + b; });
}

