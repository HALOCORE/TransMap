function f_gold(nums) {
    var num_list = nums.map(String);
    num_list.sort(function (x, y) { return parseInt(y + x) - parseInt(x + y); });
    return num_list[0] == '0' ? '0' : num_list.join('');
}

