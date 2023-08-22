function f_gold(nums, k) {
    let l = r = -1;
    while (r < nums.length - 1) {
        r += 1;
        if (nums[r] == 0) {
            k -= 1;
        }
        if (k < 0) {
            l += 1;
            if (nums[l] == 0) {
                k += 1;
            }
        }
    }
    return r - l;
}

