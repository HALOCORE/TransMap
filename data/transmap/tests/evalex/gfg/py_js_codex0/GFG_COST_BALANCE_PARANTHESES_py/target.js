function f_gold(s) {
    if (s.length == 0) console.log(0);
    var ans = 0;
    var o = 0;
    var c = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') o++;
        if (s[i] == ')') c++;
    }
    if (o != c) return -1;
    var a = new Array(s.length);
    if (s[0] == '(') a[0] = 1;
    else a[0] = -1;
    if (a[0] < 0) ans += Math.abs(a[0]);
    for (var i = 1; i < s.length; i++) {
        if (s[i] == '(') a[i] = a[i - 1] + 1;
        else a[i] = a[i - 1] - 1;
        if (a[i] < 0) ans += Math.abs(a[i]);
    }
    return ans;
}

