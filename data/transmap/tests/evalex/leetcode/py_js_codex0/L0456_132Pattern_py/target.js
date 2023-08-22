function f_gold(nums) {
    var ak = -Infinity;
    var stack = [];
    for (var num of nums.reverse()) {
        if (num < ak) {
            return true;
        }
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            ak = stack.pop();
        }
        stack.push(num);
    }
    return false;
}

