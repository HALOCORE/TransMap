
function f_gold(nums) {
    function f(nums) {
        var stk = [];
        var n = nums.length;
        var left = new Array(n).fill(-1);
        var right = new Array(n).fill(n);
        for (var i = 0; i < nums.length; i++) {
            while (stk.length > 0 && nums[stk[stk.length - 1]] <= nums[i]) {
                stk.pop();
            }
            if (stk.length > 0) {
                left[i] = stk[stk.length - 1];
            }
            stk.push(i);
        }
        stk = [];
        for (var i = n - 1; i >= 0; i--) {
            while (stk.length > 0 && nums[stk[stk.length - 1]] < nums[i]) {
                stk.pop();
            }
            if (stk.length > 0) {
                right[i] = stk[stk.length - 1];
            }
            stk.push(i);
        }
        var sum = 0;
        for (var i = 0; i < nums.length; i++) {
            sum += (i - left[i]) * (right[i] - i) * nums[i];
        }
        return sum;
    }
    var mx = f(nums);
    var mi = f(nums.map(v => -v));
    return mx + mi;
}

