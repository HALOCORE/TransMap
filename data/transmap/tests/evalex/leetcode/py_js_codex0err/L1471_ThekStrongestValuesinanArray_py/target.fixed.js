function f_gold(arr, k) {
    arr.sort((a, b) => (a - b));
    var m = arr[(arr.length - 1) >> 1];
    arr.sort(function (x, y) {
        let diff1 = -Math.abs(x - m) + Math.abs(y - m);
        if (diff1 === 0) return -x + y; else return diff1;
    });
    return arr.slice(0, k);
}

