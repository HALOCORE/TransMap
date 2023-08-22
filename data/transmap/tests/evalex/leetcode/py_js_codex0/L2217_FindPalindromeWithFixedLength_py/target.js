function f_gold(queries, intLength) {
    var l = (intLength + 1) >> 1;
    var start = Math.pow(10, l - 1);
    var end = Math.pow(10, l) - 1;
    var ans = [];
    for (var q = 0; q < queries.length; q++) {
        var v = start + queries[q] - 1;
        if (v > end) {
            ans.push(-1);
            continue;
        }
        var s = v.toString();
        s += s.split("").reverse().join("").substring(intLength % 2);
        ans.push(parseInt(s));
    }
    return ans;
}

