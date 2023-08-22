function f_gold(nums) {
    var res = f = nums[0];
    for (var num of nums.slice(1)) {
        f = num + Math.max(f, 0);
        res = Math.max(res, f);
    }
    return res;
}

