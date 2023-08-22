function f_gold(nums) {
    let stk = [];
    for (let i = 0; i < nums.length; i++) {
        if (stk.length == 0 || nums[stk[stk.length - 1]] > nums[i]) {
            stk.push(i);
        }
    }
    let ans = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stk.length != 0 && nums[stk[stk.length - 1]] <= nums[i]) {
            ans = Math.max(ans, i - stk.pop());
        }
        if (stk.length == 0) {
            break;
        }
    }
    return ans;
}

