function f_gold(nums) {
    return nums.filter(num => (num.toString().length & 1) == 0).length;
}

