function f_gold(nums) {
    function get(i) {
        var c = Counter(nums.slice(i, nums.length).filter(function (x, i) { return i % 2 == 0; })).most_common(2);
        if (!c) {
            return [[0, 0], [0, 0]];
        }
        if (c.length == 1) {
            return [c[0], [0, 0]];
        }
        return c;
    }
    var n = nums.length;
    return Math.min.apply(Math, n - (n1 + n2) for (var a, n1) in get(0) for (var b, n2) in get(1) if (a != b));
}

