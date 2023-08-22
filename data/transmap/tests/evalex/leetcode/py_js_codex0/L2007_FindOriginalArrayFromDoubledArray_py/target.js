function f_gold(changed) {
    if (changed.length % 2 != 0) {
        return [];
    }
    var n = 100010;
    var counter = Array(n).fill(0);
    for (var x of changed) {
        counter[x] += 1;
    }
    if (counter[0] % 2 != 0) {
        return [];
    }
    var res = Array(counter[0] / 2).fill(0);
    for (var i = 1; i < n; i++) {
        if (counter[i] == 0) {
            continue;
        }
        if (i * 2 > n || counter[i] > counter[i * 2]) {
            return [];
        }
        res.push(...Array(counter[i]).fill(i));
        counter[i * 2] -= counter[i];
    }
    return res;
}

