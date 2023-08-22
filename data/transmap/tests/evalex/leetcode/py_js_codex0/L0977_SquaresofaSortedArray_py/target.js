function f_gold(nums) {
    var n = nums.length;
    var res = Array(n).fill(0);
    var i = 0;
    var j = n - 1;
    var k = n - 1;
    while (i <= j) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            res[k] = nums[i] * nums[i];
            i += 1;
        }
        else {
            res[k] = nums[j] * nums[j];
            j -= 1;
        }
        k -= 1;
    }
    return res;
}

