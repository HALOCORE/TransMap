function cache(f) { return f; }
function f_gold(expression) {
    var dfs = cache(function (exp) {
        if (exp.toString().match(/^\d+$/)) {
            return [parseInt(exp)];
        }
        var ans = [];
        for (var i = 0; i < exp.length; i++) {
            var c = exp[i];
            if (c == '-' || c == '+' || c == '*') {
                var left = dfs(exp.substring(0, i));
                var right = dfs(exp.substring(i + 1));
                for (var j = 0; j < left.length; j++) {
                    for (var k = 0; k < right.length; k++) {
                        if (c == '-') {
                            ans.push(left[j] - right[k]);
                        }
                        else if (c == '+') {
                            ans.push(left[j] + right[k]);
                        }
                        else {
                            ans.push(left[j] * right[k]);
                        }
                    }
                }
            }
        }
        return ans;
    });
    return dfs(expression);
}

