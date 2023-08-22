function f_gold(fronts, backs) {
    var same = new Set();
    for (var i = 0; i < fronts.length; i++) {
        if (fronts[i] == backs[i]) {
            same.add(fronts[i]);
        }
    }
    var ans = 9999;
    for (var i = 0; i < fronts.length; i++) {
        if (!same.has(fronts[i])) {
            ans = Math.min(ans, fronts[i]);
        }
    }
    for (var i = 0; i < backs.length; i++) {
        if (!same.has(backs[i])) {
            ans = Math.min(ans, backs[i]);
        }
    }
    return ans % 9999;
}

