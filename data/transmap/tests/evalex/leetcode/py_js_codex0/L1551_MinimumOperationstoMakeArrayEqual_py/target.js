function f_gold(n) {
    var ans = 0;
    for (var i = 0; i < (n >> 1); i++) {
        ans += n - (2 * i + 1);
    }
    return ans;
}

