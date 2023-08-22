function f_gold(nums, target) {
    var n = nums.length;
    var left = 0;
    var right = n - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target <= nums[mid]) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
    }
    return left if nums[left] == target else -1;
}

