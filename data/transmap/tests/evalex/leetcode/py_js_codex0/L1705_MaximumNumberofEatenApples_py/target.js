function f_gold(apples, days) {
    var q = [];
    var n = apples.length;
    var i = ans = 0;
    while (i < n || q.length > 0) {
        if (i < n && apples[i] > 0) {
            q.push([i + days[i] - 1, apples[i]]);
        }
        while (q.length > 0 && q[0][0] < i) {
            q.shift();
        }
        if (q.length > 0) {
            var end = q[0][0];
            var num = q[0][1];
            num -= 1;
            ans += 1;
            if (num > 0 && end > i) {
                q.push([end, num]);
            }
        }
        i += 1;
    }
    return ans;
}

