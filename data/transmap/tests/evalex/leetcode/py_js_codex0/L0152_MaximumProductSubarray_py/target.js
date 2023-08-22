function f_gold(nums) {
    let maxf = minf = res = nums[0];
    for (let num of nums.slice(1)) {
        let m = maxf, n = minf;
        maxf = Math.max(num, m * num, n * num);
        minf = Math.min(num, m * num, n * num);
        res = Math.max(res, maxf);
    }
    return res;
}

