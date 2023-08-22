function f_gold(nums, k) {
    nums.sort();
    return Math.min(...(nums.slice(i, i + k - 1).map((x, j) => nums[i + j + 1] - x)));
}

