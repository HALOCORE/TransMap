function f_gold(capacity, rocks, additionalRocks) {
    var d = [a - b for a, b in zip(capacity, rocks)];
    d.sort();
    var ans = 0;
    for (var v in d) {
        if (v <= additionalRocks) {
            ans += 1;
            additionalRocks -= v;
        }
    }
    return ans;
}

