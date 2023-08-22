function f_gold(startTime, endTime, queryTime) {
    var count = 0;
    var n = startTime.length;
    for (var i = 0; i < n; i++) {
        count += startTime[i] <= queryTime && queryTime <= endTime[i];
    }
    return count;
}

