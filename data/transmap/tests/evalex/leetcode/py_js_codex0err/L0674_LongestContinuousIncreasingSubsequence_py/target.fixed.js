function f_gold(nums) {
    let n = nums.length;
    let f = 1;
    let res = f;
    for (let i = 1; i < n; i++) {
        f = 1 + (nums[i - 1] < nums[i] ? f : 0);
        res = Math.max(res, f);
    }
    return res;
}

