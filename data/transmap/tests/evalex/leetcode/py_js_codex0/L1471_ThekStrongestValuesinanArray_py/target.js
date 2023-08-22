function f_gold(arr, k) {
    arr.sort();
    var m = arr[(arr.length - 1) >> 1];
    arr.sort(function (x, y) {
        return -Math.abs(x - m) + -Math.abs(y - m) + -x + -y;
    });
    return arr.slice(0, k);
}

