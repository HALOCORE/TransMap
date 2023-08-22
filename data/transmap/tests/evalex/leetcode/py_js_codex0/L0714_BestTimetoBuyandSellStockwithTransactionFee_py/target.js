function f_gold(prices, fee) {
    var f1 = -prices[0];
    var f2 = 0;
    for (var price of prices.slice(1)) {
        f1 = Math.max(f1, f2 - price);
        f2 = Math.max(f2, f1 + price - fee);
    }
    return f2;
}

