function f_gold(nums) {
    function make(nums, i, j) {
        return str(nums[i]) if i == j else f'{nums[i]}->{nums[j]}';
    }
    let i = j = 0;
    let n = nums.length;
    let res = [];
    while (j < n) {
        while (j + 1 < n && nums[j] + 1 == nums[j + 1]) {
            j += 1;
        }
        res.push(make(nums, i, j));
        i = j + 1;
        j = i;
    }
    return res;
}

