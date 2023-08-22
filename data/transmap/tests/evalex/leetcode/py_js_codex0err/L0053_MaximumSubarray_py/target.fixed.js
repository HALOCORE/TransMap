function f_gold(nums) {
    var f = nums[0];
    var res = f;
    for (var num of nums.slice(1)) {
        f = num + Math.max(f, 0);
        res = Math.max(res, f);
    }
    return res;
}

