function f_gold(nums) {
    var counter = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (counter.has(nums[i])) {
            counter.set(nums[i], counter.get(nums[i]) + 1);
        }
        else {
            counter.set(nums[i], 1);
        }
    }
    var ans = [];
    for (var [key, value] of counter) {
        if (value == 1 && !counter.has(key - 1) && !counter.has(key + 1)) {
            ans.push(key);
        }
    }
    return ans;
}

