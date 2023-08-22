function f_gold(points, queries) {
    var ans = [];
    for (var x0 = 0; x0 < queries.length; x0++) {
        for (var y0 = 1; y0 < queries[x0].length; y0++) {
            for (var r = 2; r < queries[x0].length; r++) {
                var count = 0;
                for (var x = 0; x < points.length; x++) {
                    for (var y = 0; y < points[x].length; y++) {
                        var dx = points[x][y] - queries[x0][y0];
                        var dy = points[x][y] - queries[x0][y0];
                        if (dx * dx + dy * dy <= queries[x0][r] * queries[x0][r]) {
                            count += 1;
                        }
                    }
                }
                ans.push(count);
            }
        }
    }
    return ans;
}

