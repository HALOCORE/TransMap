
function f_gold(n, restrictions, requests) {
    var p = Array.from(Array(n).keys());
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var ans = [];
    var i = 0;
    for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
        var _a = requests_1[_i], u = _a[0], v = _a[1];
        if (find(u) == find(v)) {
            ans.push(true);
        }
        else {
            var valid = true;
            for (var _b = 0, restrictions_1 = restrictions; _b < restrictions_1.length; _b++) {
                var _c = restrictions_1[_b], x = _c[0], y = _c[1];
                if ((find(u) == find(x) && find(v) == find(y)) || (find(u) == find(y) && find(v) == find(x))) {
                    valid = false;
                    break;
                }
            }
            ans.push(valid);
            if (valid) {
                p[find(u)] = find(v);
            }
        }
    }
    return ans;
}

