function f_gold(nums) {
    var left = 0;
    var right = nums.reduce(function (a, b) { return a + b; });
    var mx = right;
    var ans = [0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            left += 1;
        }
        else {
            right -= 1;
        }
        var t = left + right;
        if (mx == t) {
            ans.push(i + 1);
        }
        else if (mx < t) {
            mx = t;
            ans = [i + 1];
        }
    }
    return ans;
}

