function f_gold(height) {
    var i = 0;
    var j = height.length - 1;
    var res = 0;
    while (i < j) {
        var t = (j - i) * Math.min(height[i], height[j]);
        res = Math.max(res, t);
        if (height[i] < height[j]) {
            i += 1;
        }
        else {
            j -= 1;
        }
    }
    return res;
}

