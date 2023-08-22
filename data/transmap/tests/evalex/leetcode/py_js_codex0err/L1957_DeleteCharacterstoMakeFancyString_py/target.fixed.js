function f_gold(s) {
    var ans = [];
    for (var c of s) {
        if (ans.length > 1 && ans[ans.length - 1] == ans[ans.length - 2] && ans[ans.length - 2] == c) {
            continue;
        }
        ans.push(c);
    }
    return ans.join('');
}

