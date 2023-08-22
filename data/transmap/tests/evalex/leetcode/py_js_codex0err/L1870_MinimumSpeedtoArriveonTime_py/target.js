
function f_gold(dist, hour) {
    function arrive_on_time(speed) {
        var res = 0;
        for (var i = 0; i < dist.length; i++) {
            res += (dist[i] / speed) if (i == dist.length - 1) else Math.ceil(dist[i] / speed);
        }
        return res <= hour;
    }
    var left = 1;
    var right = 10 ** 7;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (arrive_on_time(mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return arrive_on_time(left) ? left : -1;
}

