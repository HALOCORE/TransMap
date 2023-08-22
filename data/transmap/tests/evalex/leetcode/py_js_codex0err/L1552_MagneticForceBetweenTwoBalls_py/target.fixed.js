
function f_gold(position, m) {
    function check(f) {
        var prev = position[0];
        var cnt = 1;
        for (var curr of position.slice(1)) {
            if (curr - prev >= f) {
                prev = curr;
                cnt += 1;
            }
        }
        return cnt >= m;
    }
    position.sort((a, b) => (a - b));
    var left = 1;
    var right = position[position.length - 1];
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        if (check(mid)) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}

