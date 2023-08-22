function f_gold(capacity, rocks, additionalRocks) {
    var d = [];
    for (let i = 0; i < capacity.length; i++) {
        d.push(capacity[i] - rocks[i]);
    }
    d.sort((a, b) => (a - b));
    var ans = 0;
    for (var v of d) {
        if (v <= additionalRocks) {
            ans += 1;
            additionalRocks -= v;
        }
    }
    return ans;
}

