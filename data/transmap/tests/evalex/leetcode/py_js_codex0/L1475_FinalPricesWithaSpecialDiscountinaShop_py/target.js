
function f_gold(prices) {
    let stk = [];
    let ans = prices.slice();
    for (let i = 0; i < prices.length; i++) {
        while (stk.length > 0 && prices[stk[stk.length - 1]] >= prices[i]) {
            ans[stk.pop()] -= prices[i];
        }
        stk.push(i);
    }
    return ans;
}

