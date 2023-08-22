function f_gold(nums, k) {
    var ans = 0;
    var counter = {};
    for (var num of nums) {
        ans += counter[num - k] + counter[num + k];
        counter[num] += 1;
    }
    return ans;
}

