function f_gold(prices) {
    let f1 = -prices[0];
    let f2 = 0;
    let f3 = 0;
    for (let price of prices.slice(1)) {
        let pf1 = f1;
        let pf2 = f2;
        let pf3 = f3;
        f1 = Math.max(pf1, pf3 - price);
        f2 = Math.max(pf2, pf1 + price);
        f3 = Math.max(pf3, pf2);
    }
    return f2;
}

