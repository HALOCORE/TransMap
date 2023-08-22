
function f_gold(times, targetFriend) {
    var n = times.length;
    var h = Array.from(Array(n).keys());
    heapify(h);
    for (var i = 0; i < n; i++) {
        times[i].push(i);
    }
    times.sort();
    var busy = [];
    for (var _i = 0, times_1 = times; _i < times_1.length; _i++) {
        var _a = times_1[_i], a = _a[0], b = _a[1], i = _a[2];
        while (busy.length && busy[0][0] <= a) {
            heappush(h, heappop(busy)[1]);
        }
        var c = heappop(h);
        if (i == targetFriend) {
            return c;
        }
        heappush(busy, [b, c]);
    }
    return -1;
}

