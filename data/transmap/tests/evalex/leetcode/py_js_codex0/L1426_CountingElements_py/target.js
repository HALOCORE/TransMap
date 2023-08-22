function f_gold(arr) {
    var s = new Set(arr);
    var res = 0;
    for (var num of arr) {
        if (s.has(num + 1)) {
            res += 1;
        }
    }
    return res;
}

