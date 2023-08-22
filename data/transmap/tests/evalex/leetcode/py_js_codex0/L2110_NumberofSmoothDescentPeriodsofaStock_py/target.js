function f_gold(prices) {
    var i = 0;
    var n = prices.length;
    var ans = 0;
    while (i < n) {
        var j = i;
        while (j + 1 < n && prices[j] - prices[j + 1] == 1) {
            j += 1;
        }
        var t = j - i + 1;
        ans += t * (t + 1) / 2;
        i = j + 1;
    }
    return ans;
}

