function f_gold(arr, k) {
    if (arr[0] > k) {
        return k;
    }
    var left = 0;
    var right = arr.length;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (arr[mid] - mid - 1 >= k) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return arr[left - 1] + k - (arr[left - 1] - (left - 1) - 1);
}

