function f_gold(nums) {
    let n = nums.length;
    let ans = Array(n).fill(-1);
    let stk = [];
    for (let i = 0; i < (n << 1); i++) {
        while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
            ans[stk.pop()] = nums[i % n];
        }
        stk.push(i % n);
    }
    return ans;
}

