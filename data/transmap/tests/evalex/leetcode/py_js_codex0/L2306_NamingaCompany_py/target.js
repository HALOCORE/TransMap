
function f_gold(ideas) {
    var s = new Set(ideas);
    var f = Array(26).fill(0).map(() => Array(26).fill(0));
    for (var v of ideas) {
        var i = v.charCodeAt(0) - 'a'.charCodeAt(0);
        var t = v.split('');
        for (var j = 0; j < 26; j++) {
            t[0] = String.fromCharCode('a'.charCodeAt(0) + j);
            if (!s.has(t.join(''))) {
                f[i][j] += 1;
            }
        }
    }
    var ans = 0;
    for (var v of ideas) {
        var i = v.charCodeAt(0) - 'a'.charCodeAt(0);
        var t = v.split('');
        for (var j = 0; j < 26; j++) {
            t[0] = String.fromCharCode('a'.charCodeAt(0) + j);
            if (!s.has(t.join(''))) {
                ans += f[j][i];
            }
        }
    }
    return ans;
}

