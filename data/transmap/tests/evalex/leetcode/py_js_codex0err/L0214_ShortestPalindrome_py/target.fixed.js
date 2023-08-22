
function f_gold(s) {
    var base = 131;
    var mod = 1000000000 + 7;
    var n = s.length;
    var prefix = 0, suffix = 0;
    var mul = 1;
    var idx = 0;
    for (var i = 0; i < s.length; i++) {
        prefix = (prefix * base + (s.charCodeAt(i) - 'a'.charCodeAt(0) + 1)) % mod;
        suffix = (suffix + (s.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * mul) % mod;
        mul = (mul * base) % mod;
        if (prefix == suffix) {
            idx = i + 1;
        }
    }
    return (idx == n) ? s : Array.from(s.slice(idx)).reverse().join("") + s;
}

