function f_gold(nums) {
    for (let num of nums) {
        let idx = Math.abs(num) - 1;
        if (nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }
    return [i + 1 for (let i = 0; i < nums.length; i++) if (nums[i] > 0)];
}

