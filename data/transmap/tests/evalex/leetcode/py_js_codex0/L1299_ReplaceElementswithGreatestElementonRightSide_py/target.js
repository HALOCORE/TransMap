function f_gold(arr) {
    var m = -1;
    for (var i = arr.length - 1; i >= 0; i--) {
        var t = arr[i];
        arr[i] = m;
        m = Math.max(m, t);
    }
    return arr;
}

