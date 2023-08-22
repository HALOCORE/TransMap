function f_gold(nums) {
    var n = nums.length;
    for (var i = n; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            nums[j] = (nums[j] + nums[j + 1]) % 10;
        }
    }
    return nums[0];
}

