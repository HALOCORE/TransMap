function f_gold(nums) {
    if (nums.length < 2) {
        return true;
    }
    var count = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (count == 1) {
                return false;
            }
            if (!(i + 1 == nums.length || nums[i + 1] >= nums[i - 1] || i - 2 < 0 || nums[i - 2] < nums[i])) {
                return false;
            }
            else {
                count = 1;
            }
        }
    }
    return true;
}

