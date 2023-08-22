function f_gold(nums) {
    var arr = nums.slice().sort(function (a, b) { return a - b; });
    var n = arr.length;
    var i = Math.floor((n - 1) / 2);
    var j = n - 1;
    for (var k = 0; k < n; k++) {
        if (k % 2 == 0) {
            nums[k] = arr[i];
            i -= 1;
        }
        else {
            nums[k] = arr[j];
            j -= 1;
        }
    }
}

