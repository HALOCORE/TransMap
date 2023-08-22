function f_gold(digits) {
    var n = digits.length;
    if (n == 0) {
        return [];
    }
    var chars = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var strs = [];
    for (var d of digits) {
        strs.push(chars[parseInt(d) - 2]);
    }
    var res = [];
    for (var s of strs) {
        if (res.length === 0) {
            res = Array.from(s);
        }
        else {
            var cache = [];
            for (var item of res) {
                for (var letter of s) {
                    cache.push(item + letter);
                }
            }
            res = cache;
        }
    }
    return res;
}

