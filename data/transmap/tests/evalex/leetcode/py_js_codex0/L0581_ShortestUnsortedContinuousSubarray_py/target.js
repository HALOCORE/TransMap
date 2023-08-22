function f_gold(nums) {
    var arr = nums.slice().sort(function (a, b) { return a - b; });
    var left = 0;
    var right = nums.length - 1;
    while (left <= right && nums[left] == arr[left]) {
        left += 1;
    }
    while (left <= right && nums[right] == arr[right]) {
        right -= 1;
    }
    return right - left + 1;
}

