function f_gold(nums) {
    for (let num of nums) {
        let idx = Math.abs(num) - 1;
        if (nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }
    return nums.map((n, i) => n > 0 ? i + 1 : null).filter(x => x !== null);
}

