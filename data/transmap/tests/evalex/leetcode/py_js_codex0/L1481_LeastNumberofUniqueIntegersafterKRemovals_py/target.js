function f_gold(arr, k) {
    var counter = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (counter.has(arr[i])) {
            counter.set(arr[i], counter.get(arr[i]) + 1);
        }
        else {
            counter.set(arr[i], 1);
        }
    }
    var t = Array.from(counter.entries()).sort(function (a, b) { return a[1] - b[1]; });
    for (var i = 0; i < t.length; i++) {
        if (k >= t[i][1]) {
            k -= t[i][1];
            counter.delete(t[i][0]);
        }
        else {
            break;
        }
    }
    return counter.size;
}

