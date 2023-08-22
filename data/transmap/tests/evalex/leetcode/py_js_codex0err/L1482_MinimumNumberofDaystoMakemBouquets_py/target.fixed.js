
function f_gold(bloomDay, m, k) {
    if (m * k > bloomDay.length) return -1;
    function check(day) {
        var cnt = 0, cur = 0;
        for (var bd of bloomDay) {
            cur = (bd <= day) ? cur + 1 : 0;
            if (cur == k) {
                cnt += 1;
                cur = 0;
            }
        }
        return cnt >= m;
    }
    var left = Math.min(...bloomDay);
    var right = Math.max(...bloomDay);
    while (left < right) {
        var mid = (left + right) >> 1;
        if (check(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}

