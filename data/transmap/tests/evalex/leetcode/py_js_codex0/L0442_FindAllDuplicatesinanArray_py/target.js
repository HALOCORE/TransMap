function f_gold(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != nums[nums[i] - 1]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    return nums.filter((v, i) => v != i + 1);
}

