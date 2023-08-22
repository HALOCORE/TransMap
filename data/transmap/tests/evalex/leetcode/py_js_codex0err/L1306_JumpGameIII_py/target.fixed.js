function f_gold(arr, start) {
    var n = arr.length;
    var q = [start];
    while (q.length > 0) {
        var i = q.shift();
        if (arr[i] == 0) {
            return true;
        }
        for (var j of [i + arr[i], i - arr[i]]) {
            if (0 <= j && j < n && arr[j] >= 0) {
                q.push(j);
            }
        }
        arr[i] = -1;
    }
    return false;
}

