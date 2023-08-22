function f_gold(nums, k) {
    var ans = 0;
    var s = 1;
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        s *= nums[i];
        while (j <= i && s >= k) {
            s /= nums[j];
            j++;
        }
        ans += i - j + 1;
    }
    return ans;
}

