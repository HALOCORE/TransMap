function f_gold(num) {
    var nums = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ];
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var k = nums[i][0];
        var v = nums[i][1];
        while (num >= k) {
            num -= k;
            res.push(v);
        }
    }
    return res.join('');
}

