function minSubArraySum(nums) {
    let max_sum = 0;
    let s = 0;
    for (let num of nums) {
        s += -num;
        if (s < 0) {
            s = 0;
        }
        max_sum = Math.max(s, max_sum);
    }
    if (max_sum == 0) {
        max_sum = Math.max(...nums.map(i => -i));
    }
    let min_sum = -max_sum;
    return min_sum;
}

