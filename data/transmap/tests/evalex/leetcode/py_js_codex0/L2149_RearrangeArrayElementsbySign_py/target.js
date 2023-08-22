function f_gold(nums) {
    var ans = Array(nums.length).fill(0);
    var i = 0;
    var j = 1;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num > 0) {
            ans[i] = num;
            i += 2;
        }
        else {
            ans[j] = num;
            j += 2;
        }
    }
    return ans;
}

