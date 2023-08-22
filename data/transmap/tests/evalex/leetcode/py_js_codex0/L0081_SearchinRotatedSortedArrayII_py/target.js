
function f_gold(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var mid = (l + r) >> 1;
        if (nums[mid] == target) {
            return true;
        }
        if (nums[mid] < nums[r] || nums[mid] < nums[l]) {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
        else if (nums[mid] > nums[l] || nums[mid] > nums[r]) {
            if (target < nums[mid] && target >= nums[l]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else {
            r -= 1;
        }
    }
    return false;
}

