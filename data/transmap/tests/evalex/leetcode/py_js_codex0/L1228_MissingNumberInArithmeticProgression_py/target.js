function f_gold(arr) {
    var n = arr.length;
    var d = (arr[arr.length - 1] - arr[0]) / n;
    for (var i = 1; i < n; i++) {
        if (arr[i] != arr[i - 1] + d) {
            return arr[i - 1] + d;
        }
    }
    return arr[0];
}

