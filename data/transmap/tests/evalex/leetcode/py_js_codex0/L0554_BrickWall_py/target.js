function f_gold(wall) {
    var cnt = {};
    for (var row of wall) {
        var width = 0;
        for (var brick of row.slice(0, -1)) {
            width += brick;
            if (cnt[width] == undefined) {
                cnt[width] = 1;
            }
            else {
                cnt[width] += 1;
            }
        }
    }
    if (Object.keys(cnt).length == 0) {
        return wall.length;
    }
    var max = 0;
    for (var key in cnt) {
        if (cnt[key] > max) {
            max = cnt[key];
        }
    }
    return wall.length - max;
}

