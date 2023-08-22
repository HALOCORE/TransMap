
function f_gold(nums) {
    var mod = Math.pow(10, 9) + 7;
    var n = nums.length;
    var left = Array(n).fill(-1);
    var right = Array(n).fill(n);
    var stk = [];
    for (var i = 0; i < n; i++) {
        while (stk.length > 0 && nums[stk[stk.length - 1]] >= nums[i]) {
            stk.pop();
        }
        if (stk.length > 0) {
            left[i] = stk[stk.length - 1];
        }
        stk.push(i);
    }
    stk = [];
    for (var i = n - 1; i >= 0; i--) {
        while (stk.length > 0 && nums[stk[stk.length - 1]] > nums[i]) {
            stk.pop();
        }
        if (stk.length > 0) {
            right[i] = stk[stk.length - 1];
        }
        stk.push(i);
    }
    var s = [0].concat(nums.reduce(function (a, b) { return a + b; }));
    var ans = Math.max.apply(Math, nums.map(function (v, i) { return v * (s[right[i]] - s[left[i] + 1]); }));
    return ans % mod;
}

