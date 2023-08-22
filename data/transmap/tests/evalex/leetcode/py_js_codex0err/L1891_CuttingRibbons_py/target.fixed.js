function f_gold(ribbons, k) {
    var low = 0;
    var high = 100000;
    while (low < high) {
        var mid = (low + high + 1) >> 1;
        var cnt = 0;
        for (var ribbon of ribbons) {
            cnt += Math.floor(ribbon / mid);
        }
        if (cnt < k) {
            high = mid - 1;
        }
        else {
            low = mid;
        }
    }
    return low;
}

