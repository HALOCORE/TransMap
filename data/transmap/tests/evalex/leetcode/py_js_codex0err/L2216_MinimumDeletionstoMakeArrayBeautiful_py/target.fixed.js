function f_gold(nums) {
    let n = nums.length;
    let i = 0, ans = 0;
    while (i < n - 1) {
        if (nums[i] == nums[i + 1]) {
            ans += 1;
            i += 1;
        }
        else {
            i += 2;
        }
    }
    if ((n - ans) % 2) {
        ans += 1;
    }
    return ans;
}

