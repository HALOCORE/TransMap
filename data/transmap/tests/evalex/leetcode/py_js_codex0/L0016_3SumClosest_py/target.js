function f_gold ( nums, target ) {
    function twoSumClosest ( nums, start, end, target ) {
        let res = 0;
        let diff = 10000;
        while ( start < end ) {
            let val = nums[start] + nums[end];
            if ( val == target ) {
                return val;
            }
            if ( Math.abs(val - target) < diff ) {
                res = val;
                diff = Math.abs(val - target);
            }
            if ( val < target ) {
                start += 1;
            }
            else {
                end -= 1;
            }
        }
        return res;
    }
    nums.sort();
    let res = 0;
    let n = nums.length;
    let diff = 10000;
    for ( let i = 0; i < n - 2; i++ ) {
        let t = twoSumClosest(nums, i + 1, n - 1, target - nums[i]);
        if ( Math.abs(nums[i] + t - target) < diff ) {
            res = nums[i] + t;
            diff = Math.abs(nums[i] + t - target);
        }
    }
    return res;
}

