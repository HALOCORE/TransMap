function f_gold(num) {
    var left, right;
    left = 1;
    right = num;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (mid * mid >= num) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left * left == num;
}

