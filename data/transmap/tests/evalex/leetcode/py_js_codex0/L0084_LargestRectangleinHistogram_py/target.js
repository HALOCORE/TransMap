function f_gold(heights) {
    var res, n = heights.length;
    var stk = [];
    var left = [-1].fill(n);
    var right = [n].fill(n);
    for (var i = 0; i < heights.length; i++) {
        var h = heights[i];
        while (stk.length && heights[stk[stk.length - 1]] >= h) {
            right[stk[stk.length - 1]] = i;
            stk.pop();
        }
        if (stk.length) {
            left[i] = stk[stk.length - 1];
        }
        stk.push(i);
    }
    for (var i = 0; i < heights.length; i++) {
        var h = heights[i];
        res = Math.max(res, h * (right[i] - left[i] - 1));
    }
    return res;
}

