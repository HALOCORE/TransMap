function f_gold(rings) {
    var mp = new Map();
    for (var i = 1; i < rings.length; i += 2) {
        var c = parseInt(rings[i]);
        if (mp.has(c)) {
            mp.get(c).add(rings[i - 1]);
        } else {
            mp.set(c, new Set([rings[i - 1]]));
        }
    }
    var sum = 0;
    for (var v of mp.values()) {
        if (v.size == 3) {
            sum++;
        }
    }
    return sum;
}

