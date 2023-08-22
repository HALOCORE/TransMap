function f_gold(values, labels, numWanted, useLimit) {
    var arr = Array.from(values, (x, i) => [x, labels[i]]);
    arr.sort(function (a, b) { return b[0] - a[0]; });
    var cnt = {};
    var num = 0;
    var ans = num;
    for (var i = 0; i < arr.length; i++) {
        var v = arr[i][0];
        var l = arr[i][1];
        if (cnt[l] == null || cnt[l] < useLimit) {
            if (cnt[l] == null) cnt[l] = 0;
            cnt[l] += 1;
            num += 1;
            ans += v;
        }
        if (num == numWanted) break;
    }
    return ans;
}

