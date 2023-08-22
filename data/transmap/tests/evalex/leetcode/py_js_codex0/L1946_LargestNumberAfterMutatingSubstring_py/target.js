function f_gold(num, change) {
    var find = false;
    var nums = num.split("");
    for (var i = 0; i < num.length; i++) {
        if (parseInt(nums[i]) < change[parseInt(nums[i])]) {
            nums[i] = change[parseInt(nums[i])].toString();
            find = true;
        }
        else if (find && parseInt(nums[i]) == change[parseInt(nums[i])]) {
            continue;
        }
        else if (find) {
            break;
        }
    }
    return nums.join("");
}

