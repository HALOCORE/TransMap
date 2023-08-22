function f_gold(n) {
    var ans = new Array(n + 1);
    for (var i = 1; i < n + 1; i++) {
        ans[i] = ans[i & (i - 1)] + 1;
    }
    return ans;
}

