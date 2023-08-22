function f_gold(nums) {
    var s = [0].concat(nums.map((sum => v => sum += v)(0)));
    return Math.max.apply(Math, s.slice(1).map(function (val, i) { return Math.max(val, s[s.length - 1] - s[i]); }));
}

