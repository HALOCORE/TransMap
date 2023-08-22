function f_gold(nums) {
    if (nums[0] <= nums[nums.length - 1]) {
        return nums[0];
    }
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (nums[0] <= nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return nums[left];
}

