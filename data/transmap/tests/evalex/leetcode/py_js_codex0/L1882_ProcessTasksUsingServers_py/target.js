
function f_gold(servers, tasks) {
    var idle = [];
    var busy = [];
    for (var i = 0; i < servers.length; i++) {
        idle.push([servers[i], i]);
    }
    idle.sort(function (a, b) { return a[0] - b[0]; });
    var res = [];
    for (var start = 0; start < tasks.length; start++) {
        while (busy.length > 0 && busy[0][0] <= start) {
            var _a = busy.shift(), t = _a[0], s = _a[1], i = _a[2];
            idle.push([s, i]);
            idle.sort(function (a, b) { return a[0] - b[0]; });
        }
        if (idle.length > 0) {
            var _b = idle.shift(), s = _b[0], i = _b[1];
            busy.push([start + tasks[start], s, i]);
            busy.sort(function (a, b) { return a[0] - b[0]; });
        }
        else {
            var _c = busy.shift(), t = _c[0], s = _c[1], i = _c[2];
            busy.push([t + tasks[start], s, i]);
            busy.sort(function (a, b) { return a[0] - b[0]; });
        }
        res.push(i);
    }
    return res;
}

