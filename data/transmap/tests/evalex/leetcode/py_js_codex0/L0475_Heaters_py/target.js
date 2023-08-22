
function f_gold(houses, heaters) {
    houses.sort();
    heaters.sort();
    function check(r) {
        var m = houses.length;
        var n = heaters.length;
        var i = 0;
        var j = 0;
        while (i < m) {
            if (j >= n) return false;
            var mi = heaters[j] - r;
            var mx = heaters[j] + r;
            if (houses[i] < mi) return false;
            if (houses[i] > mx) j++;
            else i++;
        }
        return true;
    }
    var left = 0;
    var right = 1000000000;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (check(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}

