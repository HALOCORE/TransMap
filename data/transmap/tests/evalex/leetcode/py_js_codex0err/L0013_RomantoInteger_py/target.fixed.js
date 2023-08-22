
function f_gold(s) {
    let nums = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    };
    var i = 0, res = 0;
    while (i < s.length) {
        if (i + 1 < s.length && s.substring(i, i + 2) in nums) {
            res += nums[s.substring(i, i + 2)];
            i += 2;
        } else {
            res += nums[s.substring(i, i + 1)];
            i += 1;
        }
    }
    return res;
}

