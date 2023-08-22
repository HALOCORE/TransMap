function f_gold(nums, k) {
    nums.sort();
    var l = 0;
    var r = nums.length - 1;
    var ans = 0;
    while (l < r) {
        var s = nums[l] + nums[r];
        if (s == k) {
            ans += 1;
            l = l + 1;
            r = r - 1;
        }
        else if (s > k) {
            r -= 1;
        }
        else {
            l += 1;
        }
    }
    return ans;
}

