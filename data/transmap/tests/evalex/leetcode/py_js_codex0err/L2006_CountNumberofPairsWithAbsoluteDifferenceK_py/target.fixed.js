function f_gold(nums, k) {
    var ans = 0;
    var counter = {};
    for (var num of nums) {
        ans += (num - k in counter ? counter[num - k] : 0) + (num + k in counter ? counter[num + k] : 0);
        counter[num] = num in counter ? counter[num] + 1 : 1;
    }
    return ans;
}

