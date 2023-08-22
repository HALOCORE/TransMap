
function f_gold(nums) {
    function quick_sort(nums, left, right) {
        if (left >= right) {
            return;
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
        quick_sort(nums, left, j);
        quick_sort(nums, j + 1, right);
    }
    quick_sort(nums, 0, nums.length - 1);
    return nums;
}

