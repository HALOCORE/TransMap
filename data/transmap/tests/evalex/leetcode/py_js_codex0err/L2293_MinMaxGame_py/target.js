function f_gold(nums) {
    var n = nums.length;
    if (n == 1) {
        return nums[0];
    }
    var t = [];
    for (var i = 0; i < (n >> 1); i++) {
        var v = (
            Math.max(nums[i << 1], nums[i << 1 | 1])
            if (i & 1)
            else Math.min(nums[i << 1], nums[i << 1 | 1])
        );
        t.push(v);
    }
    return f_gold(t);
}

