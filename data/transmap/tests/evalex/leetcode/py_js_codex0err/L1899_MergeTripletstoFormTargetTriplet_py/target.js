function f_gold(triplets, target) {
    var maxA = maxB = maxC = 0;
    var tA, tB, tC = target;
    for (var i = 0; i < triplets.length; i++) {
        var a = triplets[i][0];
        var b = triplets[i][1];
        var c = triplets[i][2];
        if (a <= tA && b <= tB && c <= tC) {
            maxA = Math.max(maxA, a);
            maxB = Math.max(maxB, b);
            maxC = Math.max(maxC, c);
        }
    }
    return [maxA, maxB, maxC] == [tA, tB, tC];
}

