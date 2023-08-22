
function f_gold(security, time) {
    var n = security.length;
    if (n <= time * 2) {
        return [];
    }
    var left = [], right = [];
    for (var i = 1; i < n; i++) {
        if (security[i] <= security[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }
    for (var i = n - 2; i >= 0; i--) {
        if (security[i] <= security[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
    }
    return [i for (i = 0; i < n; i++) if (time <= Math.min(left[i], right[i]))];
}

