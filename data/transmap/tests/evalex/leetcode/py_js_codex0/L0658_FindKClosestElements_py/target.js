function f_gold(arr, k, x) {
    var left = 0;
    var right = arr.length - k;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (x - arr[mid] <= arr[mid + k] - x) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return arr.slice(left, left + k);
}

