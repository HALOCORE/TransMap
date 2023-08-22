function f_gold(nums) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let cnt = 0;
        for (let j = 0; j < nums.length; j++) {
            cnt += (nums[j] >> i & 1);
        }
        if (cnt % 3) {
            if (i == 31) {
                ans -= 1 << i;
            }
            else {
                ans |= 1 << i;
            }
        }
    }
    return ans;
}

