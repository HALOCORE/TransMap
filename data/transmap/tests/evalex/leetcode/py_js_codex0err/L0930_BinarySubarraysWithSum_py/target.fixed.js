function f_gold(nums, goal) {
    var i1 = 0, i2 = 0, s1 = 0, s2 = 0, j = 0, ans = 0;
    var n = nums.length;
    while (j < n) {
        s1 += nums[j];
        s2 += nums[j];
        while (i1 <= j && s1 > goal) {
            s1 -= nums[i1];
            i1 += 1;
        }
        while (i2 <= j && s2 >= goal) {
            s2 -= nums[i2];
            i2 += 1;
        }
        ans += i2 - i1;
        j += 1;
    }
    return ans;
}

