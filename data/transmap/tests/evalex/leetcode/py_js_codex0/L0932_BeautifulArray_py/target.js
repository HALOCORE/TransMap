function f_gold(n) {
    if (n == 1) {
        return [1];
    }
    var left = f_gold((n + 1) >> 1);
    var right = f_gold(n >> 1);
    left = left.map(function (x) { return x * 2 - 1; });
    right = right.map(function (x) { return x * 2; });
    return left.concat(right);
}

