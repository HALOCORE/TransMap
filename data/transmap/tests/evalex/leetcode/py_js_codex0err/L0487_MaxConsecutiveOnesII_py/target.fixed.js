function f_gold(nums) {
    let n = nums.length;
    let prefix = Array(n).fill(0);
    let suffix = Array(n).fill(0);
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            prefix[i] = nums[i];
        }
        else {
            if (nums[i] == 0) {
                prefix[i] = 0;
            } 
            else prefix[i] = prefix[i - 1] + 1; 
        }
        res = Math.max(res, prefix[i]);
    }
    for (let i = n - 1; i >= 0; i--) {
        if (i == n - 1) {
            suffix[i] = nums[i];
        }
        else {
            if (nums[i] == 0) {
                suffix[i] = 0;
            } 
            else suffix[i] = suffix[i + 1] + 1;
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            let t = 1;
            if (i > 0) {
                t += prefix[i - 1];
            }
            if (i < n - 1) {
                t += suffix[i + 1];
            }
            res = Math.max(res, t);
        }
    }
    return res;
}

