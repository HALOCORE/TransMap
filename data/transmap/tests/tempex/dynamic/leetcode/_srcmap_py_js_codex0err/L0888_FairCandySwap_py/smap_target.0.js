function f_gold(aliceSizes, bobSizes) {
    var diff = (sum(aliceSizes) - sum(bobSizes)) >> 1;
    var s = new Set(bobSizes);
    for (var a of aliceSizes) {
        var target = a - diff;
        if (s.has(target)) {
            return [a, target];
        }
    }
}

