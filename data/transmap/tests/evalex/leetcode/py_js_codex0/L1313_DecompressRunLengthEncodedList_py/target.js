function f_gold(nums) {
    var res = [];
    for (var i = 1; i < nums.length; i += 2) {
        res.push(...Array(nums[i - 1]).fill(nums[i]));
    }
    return res;
}

