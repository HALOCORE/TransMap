function f_gold(a, b, c) {
    var h = [];
    if (a > 0) {
        h.push([-a, 'a']);
    }
    if (b > 0) {
        h.push([-b, 'b']);
    }
    if (c > 0) {
        h.push([-c, 'c']);
    }
    h.sort(function (a, b) { return a[0] - b[0]; });
    var ans = [];
    while (h.length > 0) {
        var cur = h.shift();
        if (ans.length >= 2 && ans[ans.length - 1] == cur[1] && ans[ans.length - 2] == cur[1]) {
            if (h.length == 0) {
                break;
            }
            var nxt = h.shift();
            ans.push(nxt[1]);
            if (-nxt[0] > 1) {
                nxt[0] += 1;
                h.push(nxt);
            }
            h.push(cur);
            h.sort(function (a, b) { return a[0] - b[0]; });
        }
        else {
            ans.push(cur[1]);
            if (-cur[0] > 1) {
                cur[0] += 1;
                h.push(cur);
                h.sort(function (a, b) { return a[0] - b[0]; });
            }
        }
    }
    return ans.join('');
}

