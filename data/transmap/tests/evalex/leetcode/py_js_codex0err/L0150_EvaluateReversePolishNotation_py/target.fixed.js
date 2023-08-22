function f_gold(tokens) {
    var nums = [];
    for (var t of tokens) {
        if (t.length > 1 || /^\d+$/.test(t)) {
            nums.push(parseInt(t));
        }
        else {
            if (t == "+") {
                nums[nums.length - 2] += nums[nums.length - 1];
            }
            else if (t == "-") {
                nums[nums.length - 2] -= nums[nums.length - 1];
            }
            else if (t == "*") {
                nums[nums.length - 2] *= nums[nums.length - 1];
            }
            else {
                nums[nums.length - 2] = parseInt(nums[nums.length - 2] / nums[nums.length - 1]);
            }
            nums.pop();
        }
    }
    return nums[0];
}

