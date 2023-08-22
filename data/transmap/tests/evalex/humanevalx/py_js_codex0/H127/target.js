
function intersection(interval1, interval2) {
    function is_prime(num) {
        if (num == 1 || num == 0) {
            return false;
        }
        if (num == 2) {
            return true;
        }
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    var l = Math.max(interval1[0], interval2[0]);
    var r = Math.min(interval1[1], interval2[1]);
    var length = r - l;
    if (length > 0 && is_prime(length)) {
        return "YES";
    }
    return "NO";
}

