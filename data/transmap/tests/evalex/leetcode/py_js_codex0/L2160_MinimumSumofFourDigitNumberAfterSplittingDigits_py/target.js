function f_gold(num) {
    var nums = [];
    while (num) {
        nums.push(num % 10);
        num = Math.floor(num / 10);
    }
    nums.sort();
    return 10 * (nums[0] + nums[1]) + nums[2] + nums[3];
}

