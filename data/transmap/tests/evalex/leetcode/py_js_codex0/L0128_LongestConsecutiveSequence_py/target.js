function f_gold(nums) {
    var s = new Set(nums);
    var res = 0;
    for (var num of nums) {
        if (!s.has(num - 1)) {
            var t = 1;
            var next = num + 1;
            while (s.has(next)) {
                t = t + 1;
                next = next + 1;
            }
            res = Math.max(res, t);
        }
    }
    return res;
}

