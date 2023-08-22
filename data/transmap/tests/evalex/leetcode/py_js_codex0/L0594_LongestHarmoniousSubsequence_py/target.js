function f_gold(nums) {
    var counter = {};
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        if (counter[nums[i]] == undefined) {
            counter[nums[i]] = 1;
        } else {
            counter[nums[i]] += 1;
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (counter[nums[i] + 1] != undefined) {
            ans = Math.max(ans, counter[nums[i]] + counter[nums[i] + 1]);
        }
    }
    return ans;
}

