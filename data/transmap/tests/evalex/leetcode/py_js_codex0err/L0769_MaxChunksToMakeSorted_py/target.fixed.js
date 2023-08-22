function f_gold(arr) {
    var mx = 0, ans = 0;
    for (var i = 0; i < arr.length; i++) {
        mx = Math.max(mx, arr[i]);
        if (i == mx) {
            ans += 1;
        }
    }
    return ans;
}

