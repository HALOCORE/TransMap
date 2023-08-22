function f_gold(nums, k) {
    nums.sort((a, b) => (a - b));
    var low = 0;
    var high = nums.length - 1;
    var res = -1;
    while (low < high) {
        var val = nums[low] + nums[high];
        if (val < k) {
            res = Math.max(res, val);
            low += 1;
        }
        else {
            high -= 1;
        }
    }
    return res;
}

