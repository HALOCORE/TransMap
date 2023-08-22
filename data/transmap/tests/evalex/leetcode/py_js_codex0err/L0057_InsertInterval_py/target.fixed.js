
function f_gold(intervals, newInterval) {
    function merge(intervals) {
        intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
        var ans = [];
        var st = intervals[0][0];
        var ed = intervals[0][1];
        for (var i = 1; i < intervals.length; i++) {
            var s = intervals[i][0];
            var e = intervals[i][1];
            if (ed < s) {
                ans.push([st, ed]);
                st = s;
                ed = e;
            }
            else {
                ed = Math.max(ed, e);
            }
        }
        ans.push([st, ed]);
        return ans;
    }
    intervals.push(newInterval);
    return merge(intervals);
}

