function f_gold(nums) {
    nums.sort();
    var cnt = 0;
    var res = 0;
    var n = nums.length;
    for (var i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            cnt += 1;
        }
        res += cnt;
    }
    return res;
}

