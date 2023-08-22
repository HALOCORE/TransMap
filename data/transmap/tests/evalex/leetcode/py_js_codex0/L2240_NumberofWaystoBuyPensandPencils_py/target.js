function f_gold(total, cost1, cost2) {
    var ans = 0;
    for (var x = 0; x <= Math.floor(total / cost1); x++) {
        var v = total - x * cost1;
        ans += Math.floor(v / cost2) + 1;
    }
    return ans;
}

