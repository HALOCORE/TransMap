function f_gold(nums, threshold) {
    var left = 1;
    var right = 1000000;
    while (left < right) {
        var mid = (left + right) >> 1;
        var s = 0;
        for (var i = 0; i < nums.length; i++) {
            s += Math.floor((nums[i] + mid - 1) / mid);
        }
        if (s <= threshold) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

