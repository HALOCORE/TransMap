function f_gold(x) {
    if (x == 0 || x == 1) return x;
    var start = 1;
    var end = x;
    while (start <= end) {
        var mid = (start + end) / 2;
        if (mid * mid == x) return mid;
        if (mid * mid < x) {
            start = mid + 1;
            var ans = mid;
        }
        else end = mid - 1;
    }
    return ans;
}

