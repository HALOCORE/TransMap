function f_gold(nums) {
    let cnt = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (cnt.has(nums[i])) {
            cnt.set(nums[i], cnt.get(nums[i]) + 1);
        } else {
            cnt.set(nums[i], 1);
        }
    }
    for (let [key, value] of cnt) {
        if (value % 2 !== 0) {
            return false;
        }
    }
    return true;
}

