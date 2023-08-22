function f_gold(start, end, bank) {
    var s = new Set(bank);
    var q = new Array();
    q.push([start, 0]);
    var mp = {
        'A': 'TCG',
        'T': 'ACG',
        'C': 'ATG',
        'G': 'ATC'
    };
    while (q.length > 0) {
        var t = q.shift();
        var step = t[1];
        if (t[0] == end) {
            return step;
        }
        for (var i = 0; i < t[0].length; i++) {
            for (var j = 0; j < mp[t[0][i]].length; j++) {
                var next = t[0].substring(0, i) + mp[t[0][i]][j] + t[0].substring(i + 1);
                if (s.has(next)) {
                    q.push([next, step + 1]);
                    s.delete(next);
                }
            }
        }
    }
    return -1;
}

