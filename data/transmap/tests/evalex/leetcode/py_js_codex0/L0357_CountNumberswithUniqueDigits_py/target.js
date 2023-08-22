function f_gold(n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 10;
    }
    var ans = 10;
    var cur = 9;
    for (var i = 0; i < n - 1; i++) {
        cur *= 9 - i;
        ans += cur;
    }
    return ans;
}

