function f_gold(s, indices) {
    var ans = [0].fill(s.length);
    for (var i = 0; i < s.length; i++) {
        ans[indices[i]] = s[i];
    }
    return ans.join('');
}

