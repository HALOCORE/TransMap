
function f_gold(strings) {
    var mp = new Map();
    for (var s of strings) {
        var t = [];
        var diff = s.charCodeAt(0) - 'a'.charCodeAt(0);
        for (var c of s) {
            var d = c.charCodeAt(0) - diff;
            if (d < 'a'.charCodeAt(0)) {
                d += 26;
            }
            t.push(String.fromCharCode(d));
        }
        var k = t.join('');
        if (mp.has(k)) {
            mp.get(k).push(s);
        }
        else {
            mp.set(k, [s]);
        }
    }
    return Array.from(mp.values());
}

