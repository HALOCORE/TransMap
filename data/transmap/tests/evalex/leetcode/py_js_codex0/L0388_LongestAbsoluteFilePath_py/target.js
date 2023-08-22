function f_gold(input) {
    var i = 0;
    var n = input.length;
    var ans = 0;
    var stk = [];
    while (i < n) {
        var ident = 0;
        while (input[i] == '\t') {
            ident += 1;
            i += 1;
        }
        var cur = 0;
        var isFile = false;
        while (i < n && input[i] != '\n') {
            cur += 1;
            if (input[i] == '.') {
                isFile = true;
            }
            i += 1;
        }
        i += 1;
        while (stk.length > 0 && stk.length > ident) {
            stk.pop();
        }
        if (stk.length > 0) {
            cur += stk[stk.length - 1] + 1;
        }
        if (!isFile) {
            stk.push(cur);
            continue;
        }
        ans = Math.max(ans, cur);
    }
    return ans;
}

