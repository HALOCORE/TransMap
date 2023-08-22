function f_gold(s) {
    var ans = [];
    var cnt = 0;
    for (var c of s) {
        if (c == '(') {
            cnt += 1;
            if (cnt > 1) {
                ans.push(c);
            }
        }
        else {
            cnt -= 1;
            if (cnt > 0) {
                ans.push(c);
            }
        }
    }
    return ans.join('');
}

