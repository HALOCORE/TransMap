function f_gold(nums, target) {
    nums.sort();
    return [i for (i, num) in enumerate(nums) if num == target];
}

