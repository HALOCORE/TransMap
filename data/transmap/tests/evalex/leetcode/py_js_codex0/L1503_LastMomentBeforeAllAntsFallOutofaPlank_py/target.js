function f_gold(n, left, right) {
    var ans = 0;
    for (var t of left) {
        ans = Math.max(ans, t);
    }
    for (var t of right) {
        ans = Math.max(ans, n - t);
    }
    return ans;
}

