function f_gold(nums) {
    var counter = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (counter.has(nums[i])) {
            counter.set(nums[i], counter.get(nums[i]) + 1);
        } else {
            counter.set(nums[i], 1);
        }
    }
    var sum = 0;
    for (var [key, value] of counter) {
        if (value == 1) {
            sum += key;
        }
    }
    return sum;
}

