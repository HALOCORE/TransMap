function f_gold(intervals) {
    var delta = [0];
    for (var i = 0; i < 1000000; i++) {
        delta.push(0);
    }
    for (var i = 0; i < intervals.length; i++) {
        delta[intervals[i][0]] += 1;
        delta[intervals[i][1]] -= 1;
    }
    var max = 0;
    var sum = 0;
    for (var i = 0; i < delta.length; i++) {
        sum += delta[i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

