function f_gold(arr) {
    var n = arr.length;
    var i = -1;
    var k = 0;
    while (k < n) {
        i += 1;
        k += 1 if (arr[i]) else 2;
    }
    var j = n - 1;
    if (k == n + 1) {
        arr[j] = 0;
        i = i - 1;
        j = j - 1;
    }
    while (~j) {
        if (arr[i] == 0) {
            arr[j] = arr[j - 1] = arr[i];
            j -= 1;
        }
        else {
            arr[j] = arr[i];
        }
        i = i - 1;
        j = j - 1;
    }
}

