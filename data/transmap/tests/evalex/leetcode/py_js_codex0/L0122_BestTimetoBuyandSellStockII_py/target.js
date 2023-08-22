function f_gold(prices) {
    var res = 0;
    for (var i = 1; i < prices.length; i++) {
        var t = prices[i] - prices[i - 1];
        res += Math.max(t, 0);
    }
    return res;
}

