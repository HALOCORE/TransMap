function f_gold(nums) {
    let n = nums.length;
    let ans = Array(n).fill(1);
    let left = 1, right = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }
    return ans;
}

