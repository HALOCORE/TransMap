function f_gold(nums, target) {
    var left = 0;
    var right = nums.length;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (nums[mid] >= target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

