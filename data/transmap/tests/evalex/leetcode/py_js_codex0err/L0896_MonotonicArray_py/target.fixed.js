function f_gold(nums) {
    var isIncr = false, isDecr = false;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            isIncr = true;
        }
        else if (nums[i + 1] > nums[i]) {
            isDecr = true;
        }
        if (isIncr && isDecr) {
            return false;
        }
    }
    return true;
}

