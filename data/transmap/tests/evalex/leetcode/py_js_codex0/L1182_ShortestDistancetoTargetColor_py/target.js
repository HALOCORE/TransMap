
function f_gold(colors, queries) {
    var color_indexes = new Map();
    for (var i = 0; i < colors.length; i++) {
        if (color_indexes.has(colors[i])) {
            color_indexes.get(colors[i]).push(i);
        }
        else {
            color_indexes.set(colors[i], [i]);
        }
    }
    var res = [];
    for (var i = 0; i < queries.length; i++) {
        if (!color_indexes.has(queries[i][1])) {
            res.push(-1);
        }
        else {
            var t = color_indexes.get(queries[i][1]);
            var left = 0;
            var right = t.length - 1;
            while (left < right) {
                var mid = Math.floor((left + right) / 2);
                if (t[mid] >= queries[i][0]) {
                    right = mid;
                }
                else {
                    left = mid + 1;
                }
            }
            var val = Math.abs(t[left] - queries[i][0]);
            if (left > 0) {
                val = Math.min(val, Math.abs(t[left - 1] - queries[i][0]));
            }
            if (left < t.length - 1) {
                val = Math.min(val, Math.abs(t[left + 1] - queries[i][0]));
            }
            res.push(val);
        }
    }
    return res;
}

