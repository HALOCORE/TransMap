function f_gold(nums, target) {
    nums.sort();
    return nums.map((num, i) => num == target ? i : null).filter(i => i !== null);
}

