function f_gold(target, n) {
    var cur = 1;
    var ans = [];
    for (var t of target) {
        for (var i = cur; i <= n; i++) {
            ans.push('Push');
            if (t == i) {
                cur = i + 1;
                break;
            }
            ans.push('Pop');
        }
    }
    return ans;
}

