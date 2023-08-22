
function f_gold(piles, h) {
    var left = 1;
    var right = Math.pow(10, 9);
    while (left < right) {
        var mid = (left + right) >> 1;
        var s = 0;
        for (var i = 0; i < piles.length; i++) {
            s += Math.floor((piles[i] + mid - 1) / mid);
        }
        if (s <= h) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

