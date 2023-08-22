function f_gold(arr) {
    var couter = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (couter.has(arr[i])) {
            couter.set(arr[i], couter.get(arr[i]) + 1);
        }
        else {
            couter.set(arr[i], 1);
        }
    }
    var ans = 0;
    var n = 0;
    var _loop_1 = function (key, cnt) {
        n += cnt;
        ans += 1;
        if (n * 2 >= arr.length) {
            return "break";
        }
    };
    for (var _i = 0, _a = Array.from(couter.entries()).sort(function (a, b) { return b[1] - a[1]; }); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], cnt = _b[1];
        var state_1 = _loop_1(key, cnt);
        if (state_1 === "break")
            break;
    }
    return ans;
}

