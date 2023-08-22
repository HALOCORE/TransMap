function f_gold(costs, coins) {
    costs.sort();
    let ans = 0;
    for (let c of costs) {
        if (coins < c) {
            break;
        }
        else {
            ans += 1;
            coins -= c;
        }
    }
    return ans;
}

