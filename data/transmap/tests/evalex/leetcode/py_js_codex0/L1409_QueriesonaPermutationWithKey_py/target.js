function f_gold(queries, m) {
    var nums = Array.from(Array(m).keys()).map(function (x) { return x + 1; });
    var res = [];
    for (var i = 0; i < queries.length; i++) {
        res.push(nums.indexOf(queries[i]));
        nums.splice(nums.indexOf(queries[i]), 1);
        nums.unshift(queries[i]);
    }
    return res;
}

