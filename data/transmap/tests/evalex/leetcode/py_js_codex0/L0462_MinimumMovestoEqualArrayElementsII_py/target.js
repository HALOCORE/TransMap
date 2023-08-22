function f_gold(nums) {
    nums.sort();
    var k = nums[nums.length >> 1];
    return nums.reduce(function (acc, v) { return acc + Math.abs(v - k); }, 0);
}

