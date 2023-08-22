function f_gold(prices) {
    var res = 0;
    var mi = prices[0];
    for (var price of prices.slice(1)) {
        res = Math.max(res, price - mi);
        mi = Math.min(mi, price);
    }
    return res;
}

