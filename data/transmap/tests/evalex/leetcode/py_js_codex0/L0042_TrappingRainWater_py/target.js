
function f_gold(height) {
    var n = height.length;
    if (n < 3) {
        return 0;
    }
    var lmx = new Array(n);
    var rmx = new Array(n);
    lmx[0] = height[0];
    rmx[n - 1] = height[n - 1];
    for (var i = 1; i < n; i++) {
        lmx[i] = Math.max(lmx[i - 1], height[i]);
        rmx[n - 1 - i] = Math.max(rmx[n - i], height[n - 1 - i]);
    }
    var res = 0;
    for (var i = 0; i < n; i++) {
        res += Math.min(lmx[i], rmx[i]) - height[i];
    }
    return res;
}

