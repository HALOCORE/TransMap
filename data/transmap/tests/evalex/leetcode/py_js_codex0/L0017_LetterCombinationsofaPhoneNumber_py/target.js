function f_gold(digits) {
    var n = digits.length;
    if (n == 0) {
        return [];
    }
    var chars = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var strs = [chars[parseInt(d) - 2] for (d in digits)];
    var res = [];
    for (var s in strs) {
        if (!res) {
            res = list(s);
        }
        else {
            var cache = [];
            for (var item in res) {
                for (var letter in s) {
                    cache.append(item + letter);
                }
            }
            res = cache;
        }
    }
    return res;
}

