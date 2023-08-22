function f_gold(costs) {
    costs.sort(function (x, y) { return x[0] - x[1] - (y[0] - y[1]); });
    var n = costs.length >> 1;
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += costs[i][0] + costs[i + n][1];
    }
    return sum;
}

