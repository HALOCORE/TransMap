function f_gold(citations) {
    var n = citations.length;
    var left = 0;
    var right = n;
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        if (citations[n - mid] >= mid) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}

