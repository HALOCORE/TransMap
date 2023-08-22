function f_gold(s) {
    var ans = s.split("");
    for (var i = 0; i < ans.length; i++) {
        if (ans[i] == '?') {
            for (var cc of 'abc') {
                if (i > 0 && ans[i - 1] == cc) {
                    continue;
                }
                if (i < s.length - 1 && ans[i + 1] == cc) {
                    continue;
                }
                ans[i] = cc;
                break;
            }
        }
    }
    return ans.join("");
}

