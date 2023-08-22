function f_gold(x) {
    var left = 0;
    var right = x;
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        if (mid <= x / mid) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}

