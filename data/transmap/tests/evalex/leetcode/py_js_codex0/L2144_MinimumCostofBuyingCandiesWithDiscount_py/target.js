function f_gold(cost) {
    cost.sort();
    var ans = 0;
    var n = cost.length;
    for (var i = n - 1; i >= 0; i -= 3) {
        ans += cost[i];
        if (i >= 1) {
            ans += cost[i - 1];
        }
    }
    return ans;
}

