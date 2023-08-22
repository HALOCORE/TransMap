function f_gold(s, indices) {
    var ans = [0].fill(len(s));
    for (var i = 0; i < len(s); i++) {
        ans[indices[i]] = s[i];
    }
    return ans.join('');
}

