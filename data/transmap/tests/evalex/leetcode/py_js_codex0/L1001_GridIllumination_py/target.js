
function f_gold(n, lamps, queries) {
    var points = new Set();
    var rcnt = new Map();
    var ccnt = new Map();
    var dgcnt = new Map();
    var udgcnt = new Map();
    for (var i = 0; i < lamps.length; i++) {
        var r = lamps[i][0];
        var c = lamps[i][1];
        if (!points.has([r, c])) {
            points.add([r, c]);
            if (rcnt.has(r)) {
                rcnt.set(r, rcnt.get(r) + 1);
            } else {
                rcnt.set(r, 1);
            }
            if (ccnt.has(c)) {
                ccnt.set(c, ccnt.get(c) + 1);
            } else {
                ccnt.set(c, 1);
            }
            if (dgcnt.has(r - c)) {
                dgcnt.set(r - c, dgcnt.get(r - c) + 1);
            } else {
                dgcnt.set(r - c, 1);
            }
            if (udgcnt.has(r + c)) {
                udgcnt.set(r + c, udgcnt.get(r + c) + 1);
            } else {
                udgcnt.set(r + c, 1);
            }
        }
    }
    var ans = new Array(queries.length);
    for (var i = 0; i < queries.length; i++) {
        var r = queries[i][0];
        var c = queries[i][1];
        if (rcnt.has(r) || ccnt.has(c) || dgcnt.has(r - c) || udgcnt.has(r + c)) {
            ans[i] = 1;
            for (var a = 0; a < 3; a++) {
                for (var b = 0; b < 3; b++) {
                    var x = r + a;
                    var y = c + b