function f_gold(arr) {
    var n = arr.length;
    var pre = Array(n + 1).fill(0);
    for (var i = 0; i < n; i++) {
        pre[i + 1] = pre[i] ^ arr[i];
    }
    var ans = 0;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            for (var k = j; k < n; k++) {
                var a = pre[j] ^ pre[i];
                var b = pre[k + 1] ^ pre[j];
                if (a == b) {
                    ans++;
                }
            }
        }
    }
    return ans;
}

