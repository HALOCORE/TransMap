function f_gold(s) {
    var n = s.length;
    var low = 0;
    var high = n;
    var ans = [];
    for (var i = 0; i < n; i++) {
        if (s[i] == 'I') {
            ans.push(low);
            low += 1;
        }
        else {
            ans.push(high);
            high -= 1;
        }
    }
    ans.push(low);
    return ans;
}

