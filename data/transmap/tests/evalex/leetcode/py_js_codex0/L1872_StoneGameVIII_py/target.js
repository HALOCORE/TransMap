function f_gold(stones) {
    var pre_sum = Array.from(accumulate(stones));
    var f = pre_sum[stones.length - 1];
    for (var i = stones.length - 2; i >= 0; i--) {
        f = Math.max(f, pre_sum[i] - f);
    }
    return f;
}

