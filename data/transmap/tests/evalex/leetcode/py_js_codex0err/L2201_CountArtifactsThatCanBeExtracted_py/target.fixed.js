
function f_gold(n, artifacts, dig) {
    function check(artifact) {
        var r1 = artifact[0];
        var c1 = artifact[1];
        var r2 = artifact[2];
        var c2 = artifact[3];
        for (var x = r1; x <= r2; x++) {
            for (var y = c1; y <= c2; y++) {
                if (!s.has(x + "," + y)) {
                    return false;
                }
            }
        }
        return true;
    }
    var s = new Set();
    for (var i = 0; i < dig.length; i++) {
        s.add(dig[i].join(","));
    }
    var sum = 0;
    for (var i = 0; i < artifacts.length; i++) {
        if (check(artifacts[i])) {
            sum++;
        }
    }
    return sum;
}

