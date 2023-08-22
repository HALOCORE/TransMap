function f_gold(difficulty, profit, worker) {
    var n = difficulty.length;
    var job = [];
    for (var i = 0; i < n; i++) {
        job.push([difficulty[i], profit[i]]);
    }
    job.sort(function (a, b) { return a[0] - b[0]; });
    worker.sort(function (a, b) { return a - b; });
    var i = 0;
    var t = 0;
    var res = 0;
    for (var w of worker) {
        while (i < n && job[i][0] <= w) {
            t = Math.max(t, job[i][1]);
            i++;
        }
        res += t;
    }
    return res;
}

