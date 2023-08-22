function f_gold(beans) {
    beans.sort();
    var ans = s = beans.reduce((a, b) => a + b, 0);
    var n = beans.length;
    for (var i = 0; i < beans.length; i++) {
        ans = Math.min(ans, s - beans[i] * (n - i));
    }
    return ans;
}

