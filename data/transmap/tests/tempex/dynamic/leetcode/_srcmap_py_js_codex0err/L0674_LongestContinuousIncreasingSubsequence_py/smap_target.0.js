function f_gold(nums) {
    let n = nums.length;
    let res = f = 1;
    for (let i = 1; i < n; i++) {
        f = 1 + (nums[i - 1] < nums[i] ? f : 0);
        res = Math.max(res, f);
    }
    return res;
}

