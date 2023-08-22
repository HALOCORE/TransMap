
function f_gold(s) {
    function convert(i, j) {
        var res = [];
        for (var k = 1; k < j - i + 1; k++) {
            var left = s.substring(i, i + k);
            var right = s.substring(i + k, j);
            var valid = (left == '0' || !left.startsWith('0')) && !right.endsWith('0');
            if (valid) {
                res.push(left + (k < j - i ? '.' : '') + right);
            }
        }
        return res;
    }
    var n = s.length;
    var ans = [];
    for (var i = 2; i < n - 1; i++) {
        for (var x of convert(1, i)) {
            for (var y of convert(i, n - 1)) {
                ans.push('(' + x + ', ' + y + ')');
            }
        }
    }
    return ans;
}

