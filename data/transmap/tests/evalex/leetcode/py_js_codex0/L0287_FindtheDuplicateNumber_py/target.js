function f_gold(nums) {
    var left = 1;
    var right = nums.length - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        var cnt = 0;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                cnt++;
            }
        }
        if (cnt > mid) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

