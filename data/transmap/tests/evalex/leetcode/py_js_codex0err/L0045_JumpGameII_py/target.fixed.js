function f_gold(nums) {
    let end = 0, mx = 0, steps = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        mx = Math.max(mx, i + nums[i]);
        if (i == end) {
            end = mx;
            steps += 1;
        }
    }
    return steps;
}

