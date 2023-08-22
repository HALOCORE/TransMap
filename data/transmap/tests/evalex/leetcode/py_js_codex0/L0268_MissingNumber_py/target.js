function f_gold(nums) {
    var res = nums.length;
    for (var i = 0; i < nums.length; i++) {
        res ^= i ^ nums[i];
    }
    return res;
}

