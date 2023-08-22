function f_gold(strength) {
    var n = strength.length;
    var left = Array(n).fill(-1);
    var right = Array(n).fill(n);
    var stk = [];
    for (var i = 0; i < n; i++) {
        while (stk.length > 0 && strength[stk[stk.length - 1]] >= strength[i]) {
            stk.pop();
        }
        if (stk.length > 0) {
            left[i] = stk[stk.length - 1];
        }
        stk.push(i);
    }
    stk = [];
    for (var i = n - 1; i >= 0; i--) {
        while (stk.length > 0 && strength[stk[stk.length - 1]] > strength[i]) {
            stk.pop();
        }
        if (stk.length > 0) {
            right[i] = stk[stk.length - 1];
        }
        stk.push(i);
    }
    var ss = Array(n + 1).fill(0);
    for (var i = 1; i <= n; i++) {
        ss[i] = ss[i - 1] + strength[i - 1];
    }
    for (var i = 1; i <= n; i++) {
        ss[i] += ss[i - 1];
    }
    var mod = 1000000007;
    var ans = 0;
    for (var i = 0; i < n; i++) {
        var l = left[i] + 1;
        var r = right[i] - 1;
        var a = (ss[r + 2] - ss[i + 1]) * (i - l + 1);
        var b = (ss[i + 1] - ss[l]) * (r - i + 1);
        ans = (ans + (a - b) * strength[i]) % mod;
    }
    return ans;
}

