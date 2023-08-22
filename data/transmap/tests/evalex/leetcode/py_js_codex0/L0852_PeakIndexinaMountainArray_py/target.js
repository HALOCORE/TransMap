function f_gold(arr) {
    var left = 1;
    var right = arr.length - 2;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

