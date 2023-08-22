function f_gold(nums, target, start) {
    var res = Number.POSITIVE_INFINITY;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            res = Math.min(res, Math.abs(i - start));
        }
    }
    return res;
}

