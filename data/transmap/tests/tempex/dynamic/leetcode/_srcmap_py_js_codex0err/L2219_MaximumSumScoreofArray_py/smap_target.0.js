function f_gold(nums) {
    var s = [0].concat(nums.reduce(function (acc, val) { return acc.concat(acc[acc.length - 1] + val); }, []));
    return Math.max.apply(Math, s.slice(1).map(function (val, i) { return Math.max(val, s[s.length - 1] - s[i]); }));
}

