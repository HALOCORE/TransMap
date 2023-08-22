function f_gold(startTime, finishTime) {
    function get(s) {
        return parseInt(s.substring(0, 2)) * 60 + parseInt(s.substring(3));
    }
    var start = get(startTime);
    var finish = get(finishTime);
    if (start > finish) {
        finish += 24 * 60;
    }
    start = Math.floor((start + 14) / 15);
    finish = Math.floor(finish / 15);
    return Math.max(0, finish - start);
}

