function f_gold(nums) {
    let a = 0;
    let b = nums[0];
    for (let num of nums.slice(1)) {
        [a, b] = [b, Math.max(num + a, b)];
    }
    return b;
}

