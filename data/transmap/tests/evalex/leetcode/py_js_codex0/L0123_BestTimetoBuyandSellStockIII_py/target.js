function f_gold(prices) {
    let f1 = -prices[0];
    let f2 = 0;
    let f3 = -prices[0];
    let f4 = 0;
    for (let price of prices.slice(1)) {
        f1 = Math.max(f1, -price);
        f2 = Math.max(f2, f1 + price);
        f3 = Math.max(f3, f2 - price);
        f4 = Math.max(f4, f3 + price);
    }
    return f4;
}

