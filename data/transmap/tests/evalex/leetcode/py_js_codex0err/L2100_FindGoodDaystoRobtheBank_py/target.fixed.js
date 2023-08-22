
function f_gold(security, time) {
    var n = security.length;
    if (n <= time * 2) {
        return [];
    }
    var left = Array(n).fill(0), right = Array(n).fill(0);
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
    var result = [];
    for (var i = 0; i < n; i++) {
        if (time <= Math.min(left[i], right[i])) {
            result.push(i);
        }
    }
    return result;
}

