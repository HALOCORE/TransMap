function f_gold(beans) {
    beans.sort((a, b) => a - b);
    var ans = beans.reduce((a, b) => a + b, 0);
    var s = ans;
    var n = beans.length;
    for (var i = 0; i < beans.length; i++) {
        ans = Math.min(ans, s - beans[i] * (n - i));
    }
    return ans;
}

