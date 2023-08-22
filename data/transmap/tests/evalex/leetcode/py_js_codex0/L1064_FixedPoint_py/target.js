function f_gold(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (arr[mid] >= mid) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left if (arr[left] == left) else -1;
}

