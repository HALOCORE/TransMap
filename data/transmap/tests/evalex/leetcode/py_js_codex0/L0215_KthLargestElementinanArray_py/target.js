function f_gold(nums, k) {
    function quick_sort(left, right, k) {
        if (left == right) {
            return nums[left];
        }
        var i = left - 1;
        var j = right + 1;
        var x = nums[(left + right) >> 1];
        while (i < j) {
            while (1) {
                i += 1;
                if (nums[i] >= x) {
                    break;
                }
            }
            while (1) {
                j -= 1;
                if (nums[j] <= x) {
                    break;
                }
            }
            if (i < j) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
        if (j < k) {
            return quick_sort(j + 1, right, k);
        }
        return quick_sort(left, j, k);
    }
    var n = nums.length;
    return quick_sort(0, n - 1, n - k);
}

