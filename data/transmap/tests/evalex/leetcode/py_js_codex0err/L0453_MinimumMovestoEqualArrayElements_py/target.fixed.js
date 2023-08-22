function f_gold(nums) {
    return nums.reduce((a, b) => a + b) - Math.min(...nums) * nums.length;
}

