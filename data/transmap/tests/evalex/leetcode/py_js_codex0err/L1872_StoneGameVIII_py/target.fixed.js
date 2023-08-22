function f_gold(stones) {
    var pre_sum = stones.map((sum => value => sum += value)(0));
    var f = pre_sum[stones.length - 1];
    for (var i = stones.length - 2; i > 0; i--) {
        f = Math.max(f, pre_sum[i] - f);
    }
    return f;
}

