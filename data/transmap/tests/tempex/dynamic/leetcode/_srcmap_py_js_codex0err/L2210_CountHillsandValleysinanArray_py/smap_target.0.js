function f_gold(nums) {
    var ans = j = 0;
    for (var i = 1; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            continue;
        }
        if (nums[i] > nums[j] && nums[i] > nums[i + 1]) {
            ans += 1;
        }
        if (nums[i] < nums[j] && nums[i] < nums[i + 1]) {
            ans += 1;
        }
        j = i;
    }
    return ans;
}

