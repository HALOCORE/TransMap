function f_gold(nums) {
    var mx = mid = 0;
    var ans = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > mx) {
            mid = mx;
            mx = nums[i];
            ans = i;
        }
        else if (nums[i] > mid) {
            mid = nums[i];
        }
    }
    return ans >= 0 && mx >= 2 * mid ? ans : -1;
}

