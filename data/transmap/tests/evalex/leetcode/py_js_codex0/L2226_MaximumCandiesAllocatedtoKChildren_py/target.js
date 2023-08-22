
function f_gold(candies, k) {
    var left = 0;
    var right = Math.max(...candies);
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        var cnt = 0;
        for (var i = 0; i < candies.length; i++) {
            cnt += Math.floor(candies[i] / mid);
        }
        if (cnt >= k) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}

