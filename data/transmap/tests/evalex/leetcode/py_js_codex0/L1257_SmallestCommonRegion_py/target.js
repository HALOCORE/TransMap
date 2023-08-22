
function f_gold(regions, region1, region2) {
    var m = {};
    for (var region of regions) {
        for (var r of region.slice(1)) {
            m[r] = region[0];
        }
    }
    var s = new Set();
    while (m[region1]) {
        s.add(region1);
        region1 = m[region1];
    }
    while (m[region2]) {
        if (s.has(region2)) {
            return region2;
        }
        region2 = m[region2];
    }
    return region1;
}

